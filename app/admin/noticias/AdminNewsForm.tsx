'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AdminNewsRecord } from '@/lib/news/local-store';
import { slugifyTitle } from '@/lib/airtable';
import { ArrowLeft, Save, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';

import { NewsCategory } from '@/lib/news-types';

interface AdminNewsFormProps {
  isEdit: boolean;
  initialData?: AdminNewsRecord;
}

const CATEGORIES: NewsCategory[] = [
  'Avanços Científicos',
  'Direitos no SUS',
  'Eventos ACADIM',
  'Comunicados',
  'Recados',
  'Avisos',
  'Histórias de Vida',
  'Pesquisa & Ensaios Clínicos',
  'Aprovações Terapêuticas',
  'Diretrizes Clínicas & Manejo',
  'Outros',
];

export default function AdminNewsForm({ isEdit, initialData }: AdminNewsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [title, setTitle] = useState(initialData?.title || '');
  const [summary, setSummary] = useState(initialData?.summary || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState<NewsCategory>(initialData?.category || 'Avanços Científicos');
  const [tagsStr, setTagsStr] = useState(initialData?.tags ? initialData.tags.join(', ') : '');
  const [author, setAuthor] = useState(initialData?.author || 'Redação ACADIM');
  const [publishedAt, setPublishedAt] = useState(
    initialData?.publishedAt || new Date().toISOString().split('T')[0]
  );
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || '/assets/community-bg.jpg');
  const [featured, setFeatured] = useState(Boolean(initialData?.featured));
  const [status, setStatus] = useState<'draft' | 'published'>(initialData?.status || 'published');

  const slugPreview = slugifyTitle(title || 'titulo-da-noticia');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('O título é obrigatório.');
      return;
    }
    if (!content.trim()) {
      setErrorMsg('O corpo do conteúdo é obrigatório.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const tags = tagsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title,
      summary,
      content,
      category,
      tags,
      author,
      publishedAt,
      imageUrl,
      featured,
      status,
    };

    try {
      const url = isEdit ? `/api/admin/noticias/${initialData?.id}` : '/api/admin/noticias';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Erro ao salvar a notícia.');
      }

      setSuccessMsg(isEdit ? 'Notícia atualizada com sucesso!' : 'Notícia cadastrada e salva com sucesso!');
      setTimeout(() => {
        router.push('/admin/noticias');
        router.refresh();
      }, 1200);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao processar requisição.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Botão de Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/noticias"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-red transition-colors min-h-[44px]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar para o Painel</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="border-b border-slate-100 pb-6 space-y-2">
          <SectionBadge icon={Sparkles} text={isEdit ? 'Editar Publicação' : 'Nova Publicação'} variant="red" />
          <h1 className="text-2xl sm:text-3xl font-black text-text-primary">
            {isEdit ? `Editar: ${initialData?.title}` : 'Cadastrar Nova Notícia no Portal'}
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Preencha os campos editoriais abaixo. Ao marcar como &quot;Publicado&quot;, a matéria entrará imediatamente no site.
          </p>
        </div>

        {/* Mensagens de Sucesso ou Erro */}
        {successMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
            <CheckCircle2 size={16} />
            <span>{successMsg}</span>
          </div>
        )}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="space-y-6">
          {/* Título e Slug Preview */}
          <div>
            <label htmlFor="news-title" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              Título da Notícia *
            </label>
            <input
              id="news-title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Avanços Científicos e Novas Diretrizes do SUS para Distrofia em 2026"
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-sm font-extrabold text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <div className="mt-1.5 text-[11px] font-mono text-slate-400">
              Slug da URL: <span className="text-brand-blue font-bold">/noticias/{slugPreview}</span>
            </div>
          </div>

          {/* Resumo / Excerpt */}
          <div>
            <label htmlFor="news-summary" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              Resumo / Síntese (Exibido nas capas e cards) *
            </label>
            <textarea
              id="news-summary"
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Breve resumo da matéria para os cards da Home e listagem (1 a 3 frases)..."
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Corpo Completo (HTML sanitizado) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="news-content" className="block text-xs font-black uppercase tracking-wider text-slate-700">
                Corpo Editorial Completo (HTML Aceito) *
              </label>
              <span className="text-[10px] text-slate-400">Suporta HTML: &lt;p&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;strong&gt;</span>
            </div>
            <textarea
              id="news-content"
              rows={12}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escreva ou cole aqui o conteúdo completo da notícia. Exemplo: <p>Texto do artigo...</p> <h3>1. Seção Principal</h3>..."
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-mono text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Categoria e Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="news-category" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Categoria Editorial
              </label>
              <select
                id="news-category"
                value={category}
                onChange={(e) => setCategory(e.target.value as NewsCategory)}
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="news-date" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Data de Publicação
              </label>
              <input
                id="news-date"
                type="date"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          {/* Tags e Autor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="news-tags" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Tags (Separadas por vírgula)
              </label>
              <input
                id="news-tags"
                type="text"
                value={tagsStr}
                onChange={(e) => setTagsStr(e.target.value)}
                placeholder="Ex: SUS, Evento, Duchenne, Fisioterapia"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label htmlFor="news-author" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Assinatura de Autor
              </label>
              <input
                id="news-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Redação ACADIM"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          {/* URL da Imagem de Capa */}
          <div>
            <label htmlFor="news-image" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              URL da Imagem de Capa
            </label>
            <input
              id="news-image"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="/assets/community-bg.jpg ou https://..."
              className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Destaque na Hero e Status de Publicação */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <input
                id="news-featured"
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-5 h-5 text-brand-red rounded border-slate-300 focus:ring-brand-red"
              />
              <label htmlFor="news-featured" className="text-xs font-bold text-slate-800 cursor-pointer">
                Exibir com destaque prioritário na Hero da página inicial
              </label>
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="news-status" className="text-xs font-bold text-slate-800">
                Status:
              </label>
              <select
                id="news-status"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider"
              >
                <option value="published">Publicado (Visível)</option>
                <option value="draft">Rascunho (Privado)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botão de Salvar */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/noticias"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors min-h-[44px] flex items-center"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md min-h-[44px] cursor-pointer"
          >
            <Save size={16} aria-hidden="true" />
            <span>{loading ? 'Salvando...' : isEdit ? 'Atualizar Notícia' : 'Publicar Notícia'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
