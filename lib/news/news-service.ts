import { NewsArticle, NewsCategory } from '../news-types';
import { STATIC_BASE_NEWS } from './static-news';
import { newsRepository } from './news-repository';
import { fetchAirtableArticles } from '../airtable';

export function sortNewsForHero(articles: NewsArticle[]): NewsArticle[] {
  const priorityCategories: string[] = ['Eventos ACADIM', 'Comunicados', 'Recados'];
  const priorityTags: string[] = ['Evento', 'Eventos', 'Comunicado', 'Recado', 'Urgente', 'ACADIM'];

  return [...articles].sort((a, b) => {
    // Prioridade 1: Destaque explícito
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Prioridade 2: Categoria prioritária
    const aCatIndex = priorityCategories.indexOf(a.category);
    const bCatIndex = priorityCategories.indexOf(b.category);
    if (aCatIndex !== -1 && bCatIndex === -1) return -1;
    if (aCatIndex === -1 && bCatIndex !== -1) return 1;
    if (aCatIndex !== -1 && bCatIndex !== -1 && aCatIndex !== bCatIndex) {
      return aCatIndex - bCatIndex;
    }

    // Prioridade 3: Tags prioritárias
    const aHasPriorityTag = a.tags?.some((t) => priorityTags.includes(t)) || false;
    const bHasPriorityTag = b.tags?.some((t) => priorityTags.includes(t)) || false;
    if (aHasPriorityTag && !bHasPriorityTag) return -1;
    if (!aHasPriorityTag && bHasPriorityTag) return 1;

    // Prioridade 4: Data de publicação mais recente
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
}

export async function getAllNewsAsync(): Promise<NewsArticle[]> {
  // 1. Notícias do CMS (custom-news.json) têm prioridade absoluta sobre notícias estáticas
  const customArticles = await newsRepository.getPublishedArticles();
  const customSlugs = new Set(customArticles.map((art) => art.slug));

  // 2. Notícias-base estáticas servem de fallback se a notícia ainda não existir no custom-news.json
  const fallbackStaticNews = STATIC_BASE_NEWS.filter((item) => !customSlugs.has(item.slug));

  const occupiedSlugs = new Set([
    ...customArticles.map((a) => a.slug),
    ...fallbackStaticNews.map((a) => a.slug),
  ]);

  const combinedNews = [...customArticles, ...fallbackStaticNews];

  // 3. Notícias adicionais do Airtable (consultadas apenas se tokens estiverem explicitamente definidos)
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

