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
// Upstash Redis Storage Driver (Produção — Plano Gratuito, REST/HTTP)
// ─────────────────────────────────────────────────────────────────────────────
//
// Compatível com Vercel Hobby (Serverless, sem filesystem persistente).
// Usa a REST API do Upstash Redis via fetch nativo (nenhum SDK necessário).
// Tier gratuito: 10.000 comandos/dia, 256MB storage, sem cartão de crédito.
//
// Variáveis (server-only, NUNCA prefixar com NEXT_PUBLIC_):
//   KV_REST_API_URL   — ex.: https://your-db.upstash.io
//   KV_REST_API_TOKEN — bearer token
//
// Também aceita aliases comuns de integração:
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN
// ─────────────────────────────────────────────────────────────────────────────

const UPSTASH_KEY = 'acadim_custom_news';

class UpstashStorageDriver implements StorageDriver {
  private url: string;
  private token: string;

  constructor(url: string, token: string) {
    // Remove trailing slash para construir URLs consistentes
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
    // Sem cache em memória entre chamadas: serverless = instâncias efêmeras.
    // Sempre ler do Redis é a única garantia de consistência entre instâncias.
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

    // Upstash retorna string JSON serializada; aceitar também objeto direto
    const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
    return Array.isArray(parsed) ? parsed : [];
  }

  async saveRecords(records: AdminNewsRecord[]): Promise<boolean> {
    // IMPORTANTE: NÃO mentir sobre persistência. Se a gravação falhar, retornar false
    // para que a API reporte erro ao editor em vez de sucesso falso.
    //
    // Escrita via SET simples — Upstash SET é atômico por chave no servidor.
    // Race condition entre duas instâncias serverless simultâneas é LAST-WRITE-WINS.
    // Limitação conhecida e documentada: para este volume editorial (baixo),
    // o risco de colisão é aceitável; para writes concorrentes frequentes seria
    // necessário WATCH/MULTI/EXEC (transação), disponível no tier gratuito.
    const payload = JSON.stringify(records);
    const res = await fetch(`${this.url}/set/${UPSTASH_KEY}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      // O endpoint /set/<key> aceita o valor como body JSON-encoded (string)
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
// News Repository (Lógica Editorial + Storage Driver)
// ─────────────────────────────────────────────────────────────────────────────

class NewsRepository implements NewsRepositoryInterface {
  private driver: StorageDriver;
  private driverName: string;

  constructor(driver?: StorageDriver) {
    if (driver) {
      this.driver = driver;
      this.driverName = driver.constructor.name;
    } else {
      // Seleção automática: Upstash em produção (quando configurado), senão arquivo local
      const cloud = UpstashStorageDriver.fromEnv();
      if (cloud) {
        this.driver = cloud;
        this.driverName = 'UpstashStorageDriver';
      } else {
        this.driver = new LocalFileStorageDriver();
        this.driverName = 'LocalFileStorageDriver';
      }
    }
    if (process.env.NODE_ENV !== 'production' || process.env.DEBUG_STORAGE) {
      console.log(`[News Repository] Storage driver ativo: ${this.driverName}`);
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
    const saved = await this.saveRecords(records);
    if (!saved) {
      // NÃO fingir sucesso. Se a persistência falhou, propagar erro explícito.
      throw new Error('[News Repository] Falha ao persistir nova notícia no storage. Nada foi gravado.');
    }
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
    const saved = await this.saveRecords(records);
    if (!saved) {
      throw new Error('[News Repository] Falha ao persistir atualização no storage. Nada foi gravado.');
    }
    return updatedRecord;
  }

  async deleteRecord(id: string): Promise<boolean> {
    const records = await this.loadRecords();
    const filtered = records.filter((r) => r.id !== id);
    if (filtered.length === records.length) return false;
    const saved = await this.saveRecords(filtered);
    if (!saved) {
      throw new Error('[News Repository] Falha ao persistir exclusão no storage.');
    }
    return true;
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
