import fs from 'fs';
import path from 'path';
import { NewsArticle, NewsCategory, DEFAULT_NEWS_BANNER } from '../news-types';
import { slugifyTitle } from '../airtable';
import { STATIC_BASE_NEWS } from './static-news';

export interface AdminNewsRecord {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: NewsCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  imageUrl?: string;
  featured: boolean;
  status: 'draft' | 'published' | 'deleted';
  createdAt: string;
  updatedAt: string;
  contentFormat?: 'markdown' | 'html';
}

export interface NewsRepositoryInterface {
  listAllRecords(): Promise<AdminNewsRecord[]>;
  getRecordById(id: string): Promise<AdminNewsRecord | null>;
  getRecordBySlug(slug: string): Promise<AdminNewsRecord | null>;
  createRecord(input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord>;
  updateRecord(id: string, input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord | null>;
  deleteRecord(id: string): Promise<boolean>;
  purgeAllTestRecords(): Promise<number>;
  getPublishedArticles(): Promise<NewsArticle[]>;
}

/**
 * Sanitiza o HTML do corpo da notícia para prevenir XSS mantendo tags semânticas permitidas.
 */
export function sanitizeHtmlContent(html: string): string {
  if (!html) return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/\s*on\w+=(["']).*?\1/gi, '')
    .replace(/\s*on\w+=\S+/gi, '')
    .replace(/javascript:/gi, '');
}

export function parseAuthor(rawAuthor: any): { name: string; role: string; url: string } {
  if (typeof rawAuthor === 'string' && rawAuthor.trim()) {
    return {
      name: rawAuthor.trim(),
      role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: '/redacao',
    };
  }
  if (typeof rawAuthor === 'object' && rawAuthor !== null) {
    return {
      name: typeof rawAuthor.name === 'string' && rawAuthor.name.trim() ? rawAuthor.name.trim() : 'Redação ACADIM',
      role: typeof rawAuthor.role === 'string' && rawAuthor.role.trim() ? rawAuthor.role.trim() : 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
      url: typeof rawAuthor.url === 'string' && rawAuthor.url.trim() ? rawAuthor.url.trim() : '/redacao',
    };
  }
  return {
    name: 'Redação ACADIM',
    role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
    url: '/redacao',
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Storage Driver Interface
// ─────────────────────────────────────────────────────────────────────────────

interface StorageDriver {
  loadRecords(): Promise<AdminNewsRecord[]>;
  saveRecords(records: AdminNewsRecord[]): Promise<boolean>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Local File Storage Driver (Desenvolvimento Local)
// ─────────────────────────────────────────────────────────────────────────────

function getStorageFilePath(): string {
  const fileName = process.env.CUSTOM_NEWS_FILE || 'custom-news.json';
  return path.join(process.cwd(), 'data', path.basename(fileName));
}

function ensureDataDirectory(filePath: string): void {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (err) {
    console.warn('[Storage Driver] Diretório de dados não gravável no filesystem:', err);
  }
}

class LocalFileStorageDriver implements StorageDriver {
  private isWriting = false;

  async loadRecords(): Promise<AdminNewsRecord[]> {
    const filePath = getStorageFilePath();
    try {
      ensureDataDirectory(filePath);
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        if (!raw || raw.trim() === '') {
          return [];
        }
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('[Storage Driver] Leitura do disco local falhou (tolerado):', err);
    }
    return [];
  }

  async saveRecords(records: AdminNewsRecord[]): Promise<boolean> {
    while (this.isWriting) {
      await new Promise((r) => setTimeout(r, 20));
    }
    this.isWriting = true;

    const filePath = getStorageFilePath();
    try {
      ensureDataDirectory(filePath);
      const tmpPath = filePath + '.tmp';
      fs.writeFileSync(tmpPath, JSON.stringify(records, null, 2), 'utf-8');
      fs.renameSync(tmpPath, filePath);
      return true;
    } catch (err) {
      console.error('[Storage Driver] Falha ao gravar disco local:', err);
      return false;
    } finally {
      this.isWriting = false;
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Upstash Redis Storage Driver (Produção REST/HTTP)
// ─────────────────────────────────────────────────────────────────────────────

const UPSTASH_KEY = 'acadim_custom_news';

class UpstashStorageDriver implements StorageDriver {
  private url: string;
  private token: string;

  constructor(url: string, token: string) {
    this.url = url.replace(/\/+$/, '');
    this.token = token;
  }

  static isConfigured(): boolean {
    const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
    return Boolean(url && token);
  }

  static fromEnv(): UpstashStorageDriver | null {
    const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) return null;
    return new UpstashStorageDriver(url, token);
  }

  async loadRecords(): Promise<AdminNewsRecord[]> {
    const res = await fetch(`${this.url}/get/${UPSTASH_KEY}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${this.token}` },
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`[Upstash] GET falhou: HTTP ${res.status}`);
    }

    const data = await res.json();
    if (!data || data.result == null) {
      return [];
    }

    const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
    return Array.isArray(parsed) ? parsed : [];
  }

  async saveRecords(records: AdminNewsRecord[]): Promise<boolean> {
    const payload = JSON.stringify(records);
    const res = await fetch(`${this.url}/set/${UPSTASH_KEY}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[Upstash] SET falhou: HTTP ${res.status} ${text}`);
      return false;
    }

    const data = await res.json().catch(() => null);
    return data?.result === 'OK';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// News Repository Implementation
// ─────────────────────────────────────────────────────────────────────────────

class NewsRepository implements NewsRepositoryInterface {
  private driver: StorageDriver;

  constructor(driver?: StorageDriver) {
    if (driver) {
      this.driver = driver;
    } else {
      const cloud = UpstashStorageDriver.fromEnv();
      if (cloud) {
        this.driver = cloud;
      } else {
        this.driver = new LocalFileStorageDriver();
      }
    }
  }

  private async loadRecords(): Promise<AdminNewsRecord[]> {
    return this.driver.loadRecords();
  }

  private async saveRecords(records: AdminNewsRecord[]): Promise<boolean> {
    return this.driver.saveRecords(records);
  }

  async listAllRecords(): Promise<AdminNewsRecord[]> {
    return this.loadRecords();
  }

  async getRecordById(id: string): Promise<AdminNewsRecord | null> {
    const records = await this.loadRecords();
    const found = records.find((r) => r.id === id || r.slug === id);
    if (found) return found;

    // Se não encontrou no custom-news.json, busca no acervo estático base
    const staticMatch = STATIC_BASE_NEWS.find((item) => item.id === id || item.slug === id);
    if (staticMatch) {
      return {
        id: staticMatch.id || id,
        slug: staticMatch.slug,
        title: staticMatch.title,
        summary: staticMatch.excerpt || '',
        content: staticMatch.content || '',
        category: staticMatch.category,
        tags: staticMatch.tags || [],
        author: typeof staticMatch.author === 'string' ? staticMatch.author : staticMatch.author?.name || 'Redação ACADIM',
        publishedAt: staticMatch.publishedAt,
        imageUrl: staticMatch.coverImage,
        featured: Boolean(staticMatch.featured),
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        contentFormat: staticMatch.contentFormat || 'markdown',
      };
    }
    return null;
  }

  async getRecordBySlug(slug: string): Promise<AdminNewsRecord | null> {
    const records = await this.loadRecords();
    const found = records.find((r) => r.slug === slug);
    if (found) return found;

    const staticMatch = STATIC_BASE_NEWS.find((item) => item.slug === slug);
    if (staticMatch) {
      return {
        id: staticMatch.id || slug,
        slug: staticMatch.slug,
        title: staticMatch.title,
        summary: staticMatch.excerpt || '',
        content: staticMatch.content || '',
        category: staticMatch.category,
        tags: staticMatch.tags || [],
        author: typeof staticMatch.author === 'string' ? staticMatch.author : staticMatch.author?.name || 'Redação ACADIM',
        publishedAt: staticMatch.publishedAt,
        imageUrl: staticMatch.coverImage,
        featured: Boolean(staticMatch.featured),
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        contentFormat: staticMatch.contentFormat || 'markdown',
      };
    }
    return null;
  }

  async createRecord(input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord> {
    const records = await this.loadRecords();
    const now = new Date().toISOString();
    const title = input.title?.trim() || 'Nova Notícia Sem Título';
    const baseSlug = slugifyTitle(title);

    const existingSlugs = new Set(records.map((r) => r.slug));
    let finalSlug = baseSlug;
    let counter = 2;
    while (existingSlugs.has(finalSlug)) {
      finalSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    const rawContent = input.content?.trim() || '';
    const contentFormat = input.contentFormat || 'markdown';
    const sanitizedContent = contentFormat === 'html' ? sanitizeHtmlContent(rawContent) : rawContent;
    const sanitizedSummary = input.summary?.trim() || (rawContent.length > 160 ? rawContent.substring(0, 160) + '...' : '');

    const newRecord: AdminNewsRecord = {
      id: `news_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title,
      slug: finalSlug,
      summary: sanitizedSummary,
      content: sanitizedContent,
      category: (input.category as NewsCategory) || 'Avanços Científicos',
      tags: input.tags || [],
      author: input.author?.trim() || 'Redação ACADIM',
      publishedAt: input.publishedAt || now.split('T')[0],
      imageUrl: input.imageUrl?.trim() || DEFAULT_NEWS_BANNER,
      featured: Boolean(input.featured),
      status: input.status === 'published' ? 'published' : 'draft',
      createdAt: now,
      updatedAt: now,
      contentFormat,
    };

    records.unshift(newRecord);
    const saved = await this.saveRecords(records);
    if (!saved) {
      throw new Error('[News Repository] Falha ao persistir nova notícia no storage. Nada foi gravado.');
    }
    return newRecord;
  }

  async updateRecord(id: string, input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord | null> {
    const records = await this.loadRecords();
    let index = records.findIndex((r) => r.id === id || r.slug === id);

    let current: AdminNewsRecord;

    if (index === -1) {
      // Se não estava no custom-news.json ainda, busca no acervo estático base e inicializa
      const staticMatch = STATIC_BASE_NEWS.find((item) => item.id === id || item.slug === id);
      if (!staticMatch) {
        return null;
      }
      current = {
        id: staticMatch.id || id,
        slug: staticMatch.slug,
        title: staticMatch.title,
        summary: staticMatch.excerpt || '',
        content: staticMatch.content || '',
        category: staticMatch.category,
        tags: staticMatch.tags || [],
        author: typeof staticMatch.author === 'string' ? staticMatch.author : staticMatch.author?.name || 'Redação ACADIM',
        publishedAt: staticMatch.publishedAt,
        imageUrl: staticMatch.coverImage,
        featured: Boolean(staticMatch.featured),
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        contentFormat: staticMatch.contentFormat || 'markdown',
      };
      // Adiciona o novo registro inicializado
      records.unshift(current);
      index = 0;
    } else {
      current = records[index];
    }

    const updatedTitle = input.title?.trim() || current.title;
    let updatedSlug = current.slug;

    if (input.slug && input.slug.trim() && input.slug.trim() !== current.slug) {
      const baseSlug = slugifyTitle(input.slug.trim());
      const existingSlugs = new Set(records.filter((r) => r.id !== id && r.slug !== id).map((r) => r.slug));
      updatedSlug = baseSlug;
      let counter = 2;
      while (existingSlugs.has(updatedSlug)) {
        updatedSlug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    const updatedFormat = input.contentFormat || current.contentFormat || 'markdown';
    const sanitizedContent = input.content !== undefined
      ? (updatedFormat === 'html' ? sanitizeHtmlContent(input.content.trim()) : input.content.trim())
      : current.content;

    const updatedRecord: AdminNewsRecord = {
      ...current,
      title: updatedTitle,
      slug: updatedSlug,
      summary: input.summary !== undefined ? input.summary.trim() : current.summary,
      content: sanitizedContent,
      category: (input.category as NewsCategory) || current.category,
      tags: input.tags || current.tags,
      author: input.author !== undefined ? input.author.trim() : current.author,
      publishedAt: input.publishedAt || current.publishedAt,
      imageUrl: input.imageUrl !== undefined ? input.imageUrl.trim() : current.imageUrl,
      featured: input.featured !== undefined ? Boolean(input.featured) : current.featured,
      status: input.status ? input.status : current.status,
      updatedAt: new Date().toISOString(),
      contentFormat: updatedFormat,
    };

    records[index] = updatedRecord;
    const saved = await this.saveRecords(records);
    if (!saved) {
      throw new Error('[News Repository] Falha ao persistir atualização no storage.');
    }
    return updatedRecord;
  }

  async deleteRecord(id: string): Promise<boolean> {
    const records = await this.loadRecords();
    const index = records.findIndex((r) => r.id === id || r.slug === id);

    if (index !== -1) {
      const record = records[index];
      const titleLower = (record.title || '').toLowerCase();
      const slugLower = (record.slug || '').toLowerCase();
      const isTestRecord = (
        titleLower.includes('[e2e') ||
        titleLower.includes('[rc') ||
        titleLower.includes('[consistency') ||
        titleLower.includes('[teste') ||
        slugLower.includes('e2e') ||
        slugLower.includes('rc-') ||
        slugLower.includes('consistency') ||
        id.startsWith('news_test_')
      );

      if (isTestRecord) {
        // Remover completamente do storage para não deixar resíduo E2E
        records.splice(index, 1);
      } else {
        records[index].status = 'deleted';
        records[index].updatedAt = new Date().toISOString();
      }
    } else {
      const staticMatch = STATIC_BASE_NEWS.find((item) => item.id === id || item.slug === id);
      if (staticMatch) {
        records.unshift({
          id: staticMatch.id || id,
          slug: staticMatch.slug,
          title: staticMatch.title,
          summary: staticMatch.excerpt || '',
          content: staticMatch.content || '',
          category: staticMatch.category,
          tags: staticMatch.tags || [],
          author: typeof staticMatch.author === 'string' ? staticMatch.author : staticMatch.author?.name || 'Redação ACADIM',
          publishedAt: staticMatch.publishedAt,
          imageUrl: staticMatch.coverImage,
          featured: staticMatch.featured || false,
          status: 'deleted',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        return false;
      }
    }

    const saved = await this.saveRecords(records);
    return saved;
  }

  async purgeAllTestRecords(): Promise<number> {
    const records = await this.loadRecords();
    const cleanRecords = records.filter((r) => {
      const titleLower = (r.title || '').toLowerCase();
      const slugLower = (r.slug || '').toLowerCase();
      const summaryLower = (r.summary || '').toLowerCase();
      const contentLower = (r.content || '').toLowerCase();
      return !(
        titleLower.includes('[e2e') ||
        titleLower.includes('[rc') ||
        titleLower.includes('[consistency') ||
        titleLower.includes('[teste') ||
        slugLower.includes('e2e') ||
        slugLower.includes('rc-') ||
        slugLower.includes('consistency') ||
        summaryLower.includes('e2e') ||
        contentLower.includes('e2e')
      );
    });
    const removedCount = records.length - cleanRecords.length;
    if (removedCount > 0) {
      await this.saveRecords(cleanRecords);
    }
    return removedCount;
  }

  async getPublishedArticles(): Promise<NewsArticle[]> {
    const records = await this.loadRecords();
    const published = records.filter(
      (r) => r.status === 'published' && r.title && r.title.trim() !== '' && r.content && r.content.trim() !== ''
    );

    return published.map((r) => ({
      id: r.id,
      slug: r.slug || slugifyTitle(r.title),
      title: r.title,
      excerpt: r.summary || (r.content.length > 160 ? r.content.substring(0, 160) + '...' : r.content),
      content: r.content,
      category: r.category || 'Avanços Científicos',
      publishedAt: r.publishedAt || r.createdAt.split('T')[0],
      updatedAt: r.updatedAt ? r.updatedAt.split('T')[0] : undefined,
      readTime: '5 min de leitura',
      author: parseAuthor(r.author),
      coverImage: (r as any).coverImage || r.imageUrl || DEFAULT_NEWS_BANNER,
      imageAlt: (r as any).imageAlt || r.title,
      imageCredit: (r as any).imageCredit,
      featured: Boolean(r.featured),
      tags: r.tags || [],
      contentFormat: r.contentFormat || 'markdown',
    }));
  }
}

export const newsRepository: NewsRepositoryInterface = new NewsRepository();
