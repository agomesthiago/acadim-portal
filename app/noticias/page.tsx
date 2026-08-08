'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { PixModal } from '@/components/PixModal';
import { getAllNews } from '@/lib/news-data';
import { Calendar, Clock, ArrowRight, ArrowLeft, Search, Filter } from 'lucide-react';

export default function NoticiasPage() {
  const [isPixOpen, setIsPixOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const allArticles = getAllNews();

  const categories = ['Todas', 'Avanços Científicos', 'Direitos no SUS', 'Eventos ACADIM', 'Histórias de Vida'];

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Todas' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-text-primary">
      <HeaderNav onOpenPixModal={() => setIsPixOpen(true)} />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-red transition-colors min-h-[44px]"
            aria-label="Voltar ao início"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Voltar ao início</span>
          </Link>
        </div>

        {/* Cabeçalho */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Central de Notícias & Informação
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary leading-tight">
            Notícias, Ciência & Cidadania na ACADIM
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Acompanhe em tempo real as novidades sobre ensaios clínicos, conquistas de medicamentos no SUS, encontros da comunidade e artigos educativos sobre distrofia muscular.
          </p>
        </header>

        {/* Filtros e Busca */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Categorias */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Filtro por Categoria">
            <Filter size={16} className="text-slate-400 shrink-0 hidden sm:block" aria-hidden="true" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 min-h-[44px] ${
                  selectedCategory === cat
                    ? 'bg-surface-inverse text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Busca por Palavra */}
          <div className="relative md:w-72 shrink-0">
            <label htmlFor="search-input" className="sr-only">Buscar Notícias</label>
            <input
              id="search-input"
              type="text"
              placeholder="Buscar por termo ou CID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-border-focus"
            />
            <Search size={16} className="absolute left-3.5 top-3 text-slate-400" aria-hidden="true" />
          </div>

        </div>

        {/* Grid de Artigos */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-border-default transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-surface-inverse text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-brand-red" aria-hidden="true" />
                        {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold text-text-primary leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <Link
                    href={`/noticias/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-brand-red hover:underline pt-3 min-h-[44px]"
                    aria-label={`Ler notícia completa: ${article.title}`}
                  >
                    <span>Ler matéria completa</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-xl mx-auto space-y-3">
            <h3 className="text-xl font-bold text-text-primary">Nenhum resultado encontrado</h3>
            <p className="text-sm text-slate-600">
              Não encontramos nenhuma notícia com o termo &quot;{search}&quot;. Tente buscar por outros termos ou selecionar outra categoria.
            </p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory('Todas'); }}
              className="text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline pt-2"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </main>

      <PixModal isOpen={isPixOpen} onClose={() => setIsPixOpen(false)} />
    </div>
  );
}
