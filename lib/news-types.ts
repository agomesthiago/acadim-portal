// lib/news-types.ts

/** Imagem padrão usada como fallback em notícias sem capa definida. */
export const DEFAULT_NEWS_BANNER = '/assets/acadim-default-banner.jpg';


export type NewsCategory =
  | 'Avanços Científicos'
  | 'Direitos no SUS'
  | 'Eventos ACADIM'
  | 'Comunicados'
  | 'Recados'
  | 'Avisos'
  | 'Histórias de Vida'
  | 'Pesquisa & Ensaios Clínicos'
  | 'Aprovações Terapêuticas'
  | 'Diretrizes Clínicas & Manejo'
  | 'Outros';

export type ArticleStatus = 'Rascunho' | 'Em revisão' | 'Publicado' | 'Arquivado';

export interface NewsAuthor {
  name: string;
  role: string;
  avatar?: string;
  url?: string;
}

export interface PrimarySource {
  name: string;
  title?: string;
  url: string;
  originalPublishedAt?: string;
}

export interface NewsArticle {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentFormat?: 'markdown' | 'html';
  status?: ArticleStatus;
  category: NewsCategory;
  publishedAt: string; // ISO YYYY-MM-DD
  updatedAt?: string; // ISO YYYY-MM-DD
  readTime: string;
  author: NewsAuthor;
  primarySource?: PrimarySource;
  coverImage: string;
  imageUrl?: string;
  imageAlt: string;
  imageCredit?: string;
  featured?: boolean;
  tags?: string[];
  relatedDiseaseSlug?: string;
}

export interface NewsRepository {
  getAllArticles(): Promise<NewsArticle[]>;
  getArticleBySlug(slug: string): Promise<NewsArticle | undefined>;
  getFeaturedArticles(): Promise<NewsArticle[]>;
  getArticlesByCategory(category: NewsCategory): Promise<NewsArticle[]>;
}
