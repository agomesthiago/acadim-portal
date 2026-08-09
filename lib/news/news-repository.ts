import fs from 'fs';
import path from 'path';
import { NewsArticle, NewsCategory } from '../news-types';
import { slugifyTitle } from '../airtable';

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
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface NewsRepositoryInterface {
  listAllRecords(): Promise<AdminNewsRecord[]>;
  getRecordById(id: string): Promise<AdminNewsRecord | null>;
  getRecordBySlug(slug: string): Promise<AdminNewsRecord | null>;
  createRecord(input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord>;
  updateRecord(id: string, input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord | null>;
  deleteRecord(id: string): Promise<boolean>;
  getPublishedArticles(): Promise<NewsArticle[]>;
}

/**
 * Sanitiza o HTML do corpo da notícia para prevenir XSS mantendo tags semânticas permitidas.
 */
export function sanitizeHtmlContent(html: string): string {
  if (!html) return '';
  // Remove scripts, evencallbacks on* e tags de iFrames maliciosas
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/\s*on\w+=(["']).*?\1/gi, '')
    .replace(/\s*on\w+=\S+/gi, '')
    .replace(/javascript:/gi, '');
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

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'custom-news.json');

function ensureDataDirectory(): void {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (err) {
    // No Vercel Serverless o sistema de arquivos pode ser somente leitura
    console.warn('[Storage Driver] Diretório de dados não gravável no filesystem:', err);
  }
}

class LocalFileStorageDriver implements StorageDriver {
  private isWriting = false;

  async loadRecords(): Promise<AdminNewsRecord[]> {
    try {
      ensureDataDirectory();
      if (fs.existsSync(DATA_FILE_PATH)) {
        const raw = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        // Tolerar arquivo vazio ou corrompido
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

    try {
      ensureDataDirectory();
      // Escrita atômica: escreve em tmp e renomeia
      const tmpPath = DATA_FILE_PATH + '.tmp';
      fs.writeFileSync(tmpPath, JSON.stringify(records, null, 2), 'utf-8');
      fs.renameSync(tmpPath, DATA_FILE_PATH);
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
// News Repository (Lógica Editorial + Storage Driver)
// ─────────────────────────────────────────────────────────────────────────────

class NewsRepository implements NewsRepositoryInterface {
  private driver: StorageDriver;

  constructor(driver?: StorageDriver) {
    this.driver = driver || new LocalFileStorageDriver();
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
    return records.find((r) => r.id === id) || null;
  }

  async getRecordBySlug(slug: string): Promise<AdminNewsRecord | null> {
    const records = await this.loadRecords();
    return records.find((r) => r.slug === slug) || null;
  }

  async createRecord(input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord> {
    const records = await this.loadRecords();
    const now = new Date().toISOString();
    const title = input.title?.trim() || 'Nova Notícia Sem Título';
    const baseSlug = slugifyTitle(title);

    // Garantia de unicidade de slug com tratamento concorrente
    const existingSlugs = new Set(records.map((r) => r.slug));
    let finalSlug = baseSlug;
    let counter = 2;
    while (existingSlugs.has(finalSlug)) {
      finalSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    const sanitizedContent = sanitizeHtmlContent(input.content?.trim() || '');
    const sanitizedSummary = input.summary?.trim() || (sanitizedContent.length > 160 ? sanitizedContent.substring(0, 160) + '...' : '');

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
      imageUrl: input.imageUrl?.trim() || '/assets/community-bg.jpg',
      featured: Boolean(input.featured),
      status: input.status === 'published' ? 'published' : 'draft',
      createdAt: now,
      updatedAt: now,
    };

    records.unshift(newRecord);
    await this.saveRecords(records);
    return newRecord;
  }

  async updateRecord(id: string, input: Partial<AdminNewsRecord>): Promise<AdminNewsRecord | null> {
    const records = await this.loadRecords();
    const index = records.findIndex((r) => r.id === id);
    if (index === -1) return null;

    const current = records[index];
    const updatedTitle = input.title?.trim() || current.title;
    let updatedSlug = current.slug;

    if (input.title && input.title.trim() !== current.title) {
      const baseSlug = slugifyTitle(updatedTitle);
      const existingSlugs = new Set(records.filter((r) => r.id !== id).map((r) => r.slug));
      updatedSlug = baseSlug;
      let counter = 2;
      while (existingSlugs.has(updatedSlug)) {
        updatedSlug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    const sanitizedContent = input.content !== undefined ? sanitizeHtmlContent(input.content.trim()) : current.content;

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
    };

    records[index] = updatedRecord;
    await this.saveRecords(records);
    return updatedRecord;
  }

  async deleteRecord(id: string): Promise<boolean> {
    const records = await this.loadRecords();
    const filtered = records.filter((r) => r.id !== id);
    if (filtered.length === records.length) return false;
    return this.saveRecords(filtered);
  }

  async getPublishedArticles(): Promise<NewsArticle[]> {
    const records = await this.loadRecords();
    // Filtro estrito de integridade: somente publicadas com título e conteúdo real
    const published = records.filter(
      (r) => r.status === 'published' && r.title && r.title.trim() !== '' && r.content && r.content.trim() !== ''
    );

    return published.map((r) => ({
      slug: r.slug || slugifyTitle(r.title),
      title: r.title,
      excerpt: r.summary || (r.content.length > 160 ? r.content.substring(0, 160) + '...' : r.content),
      content: r.content,
      category: r.category || 'Avanços Científicos',
      publishedAt: r.publishedAt || r.createdAt.split('T')[0],
      updatedAt: r.updatedAt ? r.updatedAt.split('T')[0] : undefined,
      readTime: '5 min de leitura',
      author: {
        name: r.author || 'Redação ACADIM',
        role: 'Curadoria e Comunicação Institucional em Saúde e Cidadania',
        url: '/redacao',
      },
      coverImage: r.imageUrl || '/assets/community-bg.jpg',
      imageAlt: r.title,
      featured: Boolean(r.featured),
      tags: r.tags || [],
    }));
  }
}

// Exporta instância singleton do repositório
export const newsRepository: NewsRepositoryInterface = new NewsRepository();
