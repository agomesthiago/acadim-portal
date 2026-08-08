// lib/news-types.ts

export type NewsCategory =
  | 'Avanços Científicos'
  | 'Direitos no SUS'
  | 'Eventos ACADIM'
  | 'Histórias de Vida'
  | 'Pesquisa & Ensaios Clínicos'
  | 'Aprovações Terapêuticas'
  | 'Diretrizes Clínicas & Manejo';

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
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  publishedAt: string; // ISO YYYY-MM-DD
  updatedAt?: string; // ISO YYYY-MM-DD
  readTime: string;
  author: NewsAuthor;
  primarySource?: PrimarySource;
  coverImage: string;
  imageAlt: string;
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
