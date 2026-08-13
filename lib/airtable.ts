// lib/airtable.ts
import { NewsArticle, NewsCategory } from './news-types';

export function slugifyTitle(title: string): string {
  if (!title) return 'noticia';

  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífen
    .replace(/-+/g, '-'); // Remove hífens duplicados
}

export function ensureUniqueSlugs(articles: NewsArticle[]): NewsArticle[] {
  const slugCounts = new Map<string, number>();

  return articles.map((article) => {
    let baseSlug = article.slug || slugifyTitle(article.title);
    if (!baseSlug) baseSlug = 'noticia';

    let count = slugCounts.get(baseSlug) || 0;
    count++;
    slugCounts.set(baseSlug, count);

    const finalSlug = count === 1 ? baseSlug : `${baseSlug}-${count}`;

    return {
      ...article,
      slug: finalSlug,
    };
  });
}

const DEFAULT_AUTHOR = {
  name: 'Redação ACADIM',
  role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
  url: '/redacao',
};



export async function fetchAirtableArticles(): Promise<NewsArticle[] | null> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'tbldk81XANXN7rr32';

  if (!token || !baseId) {
    return null;
  }

  try {
    const rawArticles: NewsArticle[] = [];
    let offset: string | undefined = undefined;
    let targetTableName = tableName;

    do {
      let url = `https://api.airtable.com/v0/${baseId}/${targetTableName}`;
      if (offset) {
        url += `?offset=${encodeURIComponent(offset)}`;
      }

      let response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      });

      // Fallback para id de tabela caso o nome amigável falhe na 1ª página
      if (!response.ok && targetTableName !== 'tbldk81XANXN7rr32' && !offset) {
        targetTableName = 'tbldk81XANXN7rr32';
        url = `https://api.airtable.com/v0/${baseId}/${targetTableName}`;
        response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          next: { revalidate: 60 },
        });
      }

      if (!response.ok) {
        console.warn(`[Airtable CMS Warning] Erro da API do Airtable (${response.status}): ${response.statusText}`);
        break;
      }

      const data = await response.json();

      if (!data.records || !Array.isArray(data.records)) {
        break;
      }

      for (const record of data.records) {
        const f = record.fields || {};

        // 1. Status: Aceita "Publicado" ou "Done" (compatibilidade de transição)
        const status = String(f['Status'] || '').trim().toLowerCase();
        if (status !== 'publicado' && status !== 'done') {
          continue;
        }

        // 2. Título (Obrigatório)
        const titleStr =
          typeof f['Título'] === 'string' && f['Título'].trim()
            ? f['Título'].trim()
            : typeof f['title'] === 'string' && f['title'].trim()
            ? f['title'].trim()
            : typeof f['Name'] === 'string' && f['Name'].trim()
            ? f['Name'].trim()
            : null;

        if (!titleStr) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[Airtable CMS] Registro ${record.id} ignorado por ausência de Título.`);
          }
          continue;
        }

        // 3. Conteúdo (Obrigatório)
        const contentStr =
          typeof f['Conteúdo'] === 'string' && f['Conteúdo'].trim()
            ? f['Conteúdo'].trim()
            : typeof f['content'] === 'string' && f['content'].trim()
            ? f['content'].trim()
            : typeof f['Notes'] === 'string' && f['Notes'].trim()
            ? f['Notes'].trim()
            : typeof f['Attachment Summary'] === 'object' && f['Attachment Summary'] !== null && 'value' in (f['Attachment Summary'] as Record<string, unknown>)
            ? String((f['Attachment Summary'] as Record<string, unknown>).value || '').trim()
            : typeof f['Attachment Summary'] === 'string' && f['Attachment Summary'].trim()
            ? f['Attachment Summary'].trim()
            : null;

        if (!contentStr) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[Airtable CMS] Registro "${titleStr}" (${record.id}) ignorado por ausência de Conteúdo.`);
          }
          continue;
        }

        // 4. Resumo
        const excerptStr =
          typeof f['Resumo'] === 'string' && f['Resumo'].trim()
            ? f['Resumo'].trim()
            : typeof f['excerpt'] === 'string' && f['excerpt'].trim()
            ? f['excerpt'].trim()
            : contentStr.length > 160
            ? contentStr.substring(0, 160) + '...'
            : contentStr;

        // 5. Categoria
        const categoryStr =
          typeof f['Categoria'] === 'string' && f['Categoria'].trim()
            ? f['Categoria'].trim()
            : typeof f['category'] === 'string' && f['category'].trim()
            ? f['category'].trim()
            : 'Avanços Científicos';

        // 6. Imagem de capa
        let coverImage = '/assets/acadim-default-banner.jpg';
        const rawImage = f['Imagem de capa'] || f['Attachments'];
        if (Array.isArray(rawImage) && rawImage[0] && typeof rawImage[0] === 'object' && 'url' in rawImage[0]) {
          coverImage = String((rawImage[0] as { url: string }).url);
        } else if (typeof rawImage === 'string' && rawImage.trim()) {
          coverImage = rawImage.trim();
        }

        // 7. Fonte e Autor
        const sourceName = typeof f['Fonte'] === 'string' ? f['Fonte'].trim() : undefined;
        const sourceUrl = typeof f['URL da fonte'] === 'string' ? f['URL da fonte'].trim() : undefined;
        const primarySource = sourceName && sourceUrl ? { name: sourceName, url: sourceUrl } : undefined;

        const customAuthorName = typeof f['Autor'] === 'string' && f['Autor'].trim() ? f['Autor'].trim() : 'Redação ACADIM';
        const author = {
          ...DEFAULT_AUTHOR,
          name: customAuthorName,
        };

        // 8. Tags
        let tags: string[] = [];
        if (Array.isArray(f['Tags'])) {
          tags = f['Tags'].map(String);
        } else if (typeof f['Tags'] === 'string') {
          tags = f['Tags'].split(',').map((t) => t.trim()).filter(Boolean);
        }

        // 9. Data de publicação e Destaque
        const pubDate =
          typeof f['Data de publicação'] === 'string' && f['Data de publicação'].trim()
            ? f['Data de publicação'].trim()
            : new Date().toISOString().split('T')[0];

        const featured = Boolean(f['Destaque']);
        const userSlug = slugifyTitle(titleStr);

        rawArticles.push({
          slug: userSlug,
          title: titleStr,
          excerpt: excerptStr,
          content: contentStr,
          category: categoryStr as NewsCategory,
          publishedAt: pubDate,
          readTime: '5 min de leitura',
          author,
          primarySource,
          coverImage,
          imageAlt: titleStr,
          featured,
          tags,
        });
      }

      offset = data.offset;
    } while (offset);

    return ensureUniqueSlugs(rawArticles);
  } catch (error) {
    console.error('[Airtable CMS Error] Falha ao consultar a API do Airtable:', error);
    return null;
  }
}
