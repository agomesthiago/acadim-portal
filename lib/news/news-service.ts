import { NewsArticle, NewsCategory } from '../news-types';
import { STATIC_BASE_NEWS } from './static-news';
import { newsRepository } from './news-repository';
import { fetchAirtableArticles } from '../airtable';

export function sortNewsForHero(articles: NewsArticle[]): NewsArticle[] {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();

    if (dateB !== dateA) return dateB - dateA;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    return 0;
  });
}

export async function getAllNewsAsync(): Promise<NewsArticle[]> {
  // 1. Carrega todos os registros do repositório
  const allCustomRecords = await newsRepository.listAllRecords();

  const customIds = new Set(allCustomRecords.map((r) => r.id));
  const customSlugs = new Set(allCustomRecords.map((r) => r.slug));

  const deletedSlugs = new Set(
    allCustomRecords.filter((r) => r.status === 'deleted').map((r) => r.slug)
  );
  const deletedIds = new Set(
    allCustomRecords.filter((r) => r.status === 'deleted').map((r) => r.id)
  );

  // 2. Notícias publicadas ativas no CMS
  const customArticles = await newsRepository.getPublishedArticles();
  const activeCustomArticles = customArticles.filter(
    (art) => !deletedSlugs.has(art.slug)
  );

  // 3. Notícias-base estáticas servem de fallback SE NÃO tiverem registro customizado (por ID ou slug) E NEM tiverem sido DELETADAS
  const fallbackStaticNews = STATIC_BASE_NEWS.filter((item) => {
    const isOverriddenById = item.id ? customIds.has(item.id) : false;
    const isOverriddenBySlug = customSlugs.has(item.slug);
    const isDeletedBySlug = deletedSlugs.has(item.slug);
    const isDeletedById = item.id ? deletedIds.has(item.id) : false;

    return !isOverriddenById && !isOverriddenBySlug && !isDeletedBySlug && !isDeletedById;
  });

  const combinedNews = [...activeCustomArticles, ...fallbackStaticNews];

  const occupiedSlugs = new Set([
    ...combinedNews.map((a) => a.slug),
    ...deletedSlugs,
  ]);

  // 4. Notícias do Airtable (se configurado)
  if (process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID) {
    try {
      const airtableArticles = await fetchAirtableArticles();

      if (airtableArticles && Array.isArray(airtableArticles) && airtableArticles.length > 0) {
        const validAirtableArticles = airtableArticles.filter(
          (art) => art && art.slug && art.title && art.content && !occupiedSlugs.has(art.slug)
        );

        return sortNewsForHero([...combinedNews, ...validAirtableArticles]);
      }
    } catch (error) {
      console.warn('[News Service Warning] Falha ao consultar o Airtable:', error);
    }
  }

  return sortNewsForHero(combinedNews);
}

export async function getNewsBySlugAsync(slug: string): Promise<NewsArticle | null> {
  if (!slug) return null;

  const allArticles = await getAllNewsAsync();
  const found = allArticles.find((art) => art.slug === slug);
  return found || null;
}

export async function getFeaturedNewsAsync(): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsAsync();
  return allArticles.filter((art) => art.featured);
}

export async function getNewsByCategoryAsync(category: NewsCategory): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsAsync();
  return allArticles.filter((art) => art.category === category);
}
