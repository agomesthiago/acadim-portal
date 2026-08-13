'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/lib/date-utils';
import { AdminNewsRecord } from '@/lib/news/news-repository';
import { NewsArticle } from '@/lib/news-types';
import { Edit2, Trash2, Eye, FileText, CheckCircle2, Clock, Star, ExternalLink } from 'lucide-react';

interface AdminNewsClientProps {
  initialRecords: AdminNewsRecord[];
  baseArticles: NewsArticle[];
}

export default function AdminNewsClient({ initialRecords, baseArticles }: AdminNewsClientProps) {
  const router = useRouter();
  const [records, setRecords] = useState<AdminNewsRecord[]>(initialRecords);
  const [baseList, setBaseList] = useState<NewsArticle[]>(baseArticles);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleStatus = async (record: AdminNewsRecord) => {
    const newStatus = record.status === 'published' ? 'draft' : 'published';
    try {
      const res = await fetch(`/api/admin/noticias/${record.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const updated = await res.json();
        setRecords((prev) => prev.map((r) => (r.id === record.id ? updated : r)));
        router.refresh();
      }
    } catch (err) {
      console.error('Erro ao alterar status:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta notícia permanentemente? Ela será removida do site público e das APIs.')) return;
    setDeletingId(id);

    try {
      const res = await fetch(`/api/admin/noticias/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setRecords((prev) => prev.filter((r) => r.id !== id && r.slug !== id));
        setBaseList((prev) => prev.filter((b) => b.id !== id && b.slug !== id));
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(`Erro ao excluir: ${data.error || 'Falha na requisição'}`);
      }
    } catch (err) {
      console.error('Erro ao excluir notícia:', err);
      alert('Erro inesperado ao excluir notícia.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Seção 1: Notícias Cadastradas no Painel */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-brand-red" />
            <h2 className="text-lg font-black text-text-primary">
              Notícias Cadastradas no Painel ({records.length})
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Armazenamento Editorial Nativo
          </span>
        </div>

        {records.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 px-6">Título da Matéria</th>
                  <th className="py-3.5 px-6">Categoria</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6">Data</th>
                  <th className="py-3.5 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                {records.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-text-primary max-w-xs sm:max-w-md truncate">
                      <div className="flex items-center gap-2">
                        {r.featured && (
                          <Star size={14} className="text-amber-500 fill-amber-500 shrink-0" aria-label="Notícia em Destaque" />
                        )}
                        <span className="truncate">{r.title}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">/{r.slug}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-md text-[10px] uppercase">
                        {r.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => toggleStatus(r)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer ${
                          r.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                        title="Clique para alternar Publicado / Rascunho"
                      >
                        {r.status === 'published' ? (
                          <>
                            <CheckCircle2 size={12} /> Publicado
                          </>
                        ) : (
                          <>
                            <Clock size={12} /> Rascunho
                          </>
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-slate-500 font-semibold">
                      {formatDate(r.publishedAt)}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-right space-x-2">
                      {r.status === 'published' && (
                        <Link
                          href={`/noticias/${r.slug}`}
                          target="_blank"
                          className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="Ver Notícia no Site"
                        >
                          <Eye size={15} />
                        </Link>
                      )}
                      <Link
                        href={`/admin/noticias/${r.id}`}
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-brand-blue transition-colors"
                        title="Editar Notícia"
                      >
                        <Edit2 size={15} />
                      </Link>
                      <button
                        onClick={() => handleDelete(r.id)}
                        disabled={deletingId === r.id}
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-red-50 hover:bg-red-100 text-brand-red transition-colors cursor-pointer"
                        title="Excluir Notícia"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500 space-y-3">
            <p className="text-sm font-semibold">Nenhuma notícia personalizada criada no painel ainda.</p>
            <Link
              href="/admin/noticias/nova"
              className="inline-flex items-center gap-1.5 text-xs font-black text-brand-red uppercase tracking-wider hover:underline"
            >
              + Clique aqui para criar uma notícia
            </Link>
          </div>
        )}
      </div>

      {/* Seção 2: Acervo Histórico da Plataforma */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <h2 className="text-lg font-black text-text-primary">
              Acervo Histórico de Notícias ({baseList.length})
            </h2>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase">
            Acervo Base
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-6">Título da Notícia-Base</th>
                <th className="py-3.5 px-6">Categoria</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">Data</th>
                <th className="py-3.5 px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {baseList.map((art) => (
                <tr key={art.slug} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-text-primary max-w-xs sm:max-w-md truncate">
                    <span className="truncate">{art.title}</span>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">/{art.slug}</div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-md text-[10px] uppercase">
                      {art.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                      Publicado
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-slate-500 font-semibold">
                    {formatDate(art.publishedAt)}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-right space-x-2">
                    <Link
                      href={`/noticias/${art.slug}`}
                      target="_blank"
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="Ver Notícia no Site"
                    >
                      <ExternalLink size={15} />
                    </Link>
                    <button
                      onClick={() => handleDelete(art.id || art.slug)}
                      disabled={deletingId === (art.id || art.slug)}
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-red-50 hover:bg-red-100 text-brand-red transition-colors cursor-pointer"
                      title="Excluir Notícia"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
