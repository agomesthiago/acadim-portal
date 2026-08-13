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
  contentFormat?: 'markdown' | 'html';
}

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'custom-news.json');

function ensureDataDirectory(): void {
  const dir = path.dirname(DATA_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getRawAdminNewsRecords(): AdminNewsRecord[] {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(DATA_FILE_PATH)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('[Admin Local Store Error] Falha ao ler arquivo de notícias personalizadas:', err);
    return [];
  }
}

export function saveAdminNewsRecords(records: AdminNewsRecord[]): boolean {
  try {
    if (!Array.isArray(records)) {
      throw new Error('Payload is not an array.');
    }
    ensureDataDirectory();
    const tempPath = `${DATA_FILE_PATH}.tmp.${Date.now()}`;
    const payloadStr = JSON.stringify(records, null, 2);
    if (!payloadStr || payloadStr.length < 2) {
      throw new Error('Payload is empty or invalid.');
    }
    fs.writeFileSync(tempPath, payloadStr, 'utf-8');
    fs.renameSync(tempPath, DATA_FILE_PATH);
    return true;
  } catch (err) {
    console.error('[Admin Local Store Error] Falha ao salvar notícias personalizadas de forma atômica:', err);
    return false;
  }
}

export function getPublishedLocalArticles(): NewsArticle[] {
  const records = getRawAdminNewsRecords();
  const published = records.filter((r) => r.status === 'published' && r.title && r.content);

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
    coverImage: (r as any).coverImage || r.imageUrl || '/assets/community-bg.jpg',
    imageAlt: (r as any).imageAlt || r.title,
    imageCredit: (r as any).imageCredit,
    featured: Boolean(r.featured),
    tags: r.tags || [],
    contentFormat: r.contentFormat || 'html',
    status: r.status === 'published' ? 'Publicado' : 'Rascunho',
  }));
}

export function createAdminNewsRecord(input: Partial<AdminNewsRecord>): AdminNewsRecord {
  const records = getRawAdminNewsRecords();
  const now = new Date().toISOString();
  const title = input.title?.trim() || 'Nova Notícia Sem Título';
  const baseSlug = slugifyTitle(title);

  // Garantir slug único
  const existingSlugs = new Set(records.map((r) => r.slug));
  let finalSlug = baseSlug;
  let counter = 2;
  while (existingSlugs.has(finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  const newRecord: AdminNewsRecord = {
    id: `news_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title,
    slug: finalSlug,
    summary: input.summary?.trim() || '',
    content: input.content?.trim() || '',
    category: (input.category as NewsCategory) || 'Avanços Científicos',
    tags: input.tags || [],
    author: input.author?.trim() || 'Redação ACADIM',
    publishedAt: input.publishedAt || now.split('T')[0],
    imageUrl: input.imageUrl?.trim() || '/assets/community-bg.jpg',
    featured: Boolean(input.featured),
    status: input.status === 'published' ? 'published' : 'draft',
    createdAt: now,
    updatedAt: now,
    contentFormat: input.contentFormat || 'markdown',
  };

  records.unshift(newRecord);
  saveAdminNewsRecords(records);
  return newRecord;
}

export function updateAdminNewsRecord(id: string, input: Partial<AdminNewsRecord>): AdminNewsRecord | null {
  const records = getRawAdminNewsRecords();
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

  const updatedRecord: AdminNewsRecord = {
    ...current,
    title: updatedTitle,
    slug: updatedSlug,
    summary: input.summary !== undefined ? input.summary.trim() : current.summary,
    content: input.content !== undefined ? input.content.trim() : current.content,
    category: (input.category as NewsCategory) || current.category,
    tags: input.tags || current.tags,
    author: input.author !== undefined ? input.author.trim() : current.author,
    publishedAt: input.publishedAt || current.publishedAt,
    imageUrl: input.imageUrl !== undefined ? input.imageUrl.trim() : current.imageUrl,
    featured: input.featured !== undefined ? Boolean(input.featured) : current.featured,
    status: input.status ? input.status : current.status,
    updatedAt: new Date().toISOString(),
    contentFormat: input.contentFormat || current.contentFormat || 'html',
  };

  records[index] = updatedRecord;
  saveAdminNewsRecords(records);
  return updatedRecord;
}

export function deleteAdminNewsRecord(id: string): boolean {
  const records = getRawAdminNewsRecords();
  const filtered = records.filter((r) => r.id !== id);
  if (filtered.length === records.length) return false;
  return saveAdminNewsRecords(filtered);
}
