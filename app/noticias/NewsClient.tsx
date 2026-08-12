'use client';

import React, { useState } from 'react';
import NewsImage from '@/components/NewsImage';
import Link from 'next/link';
import { formatDate } from '@/lib/date-utils';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { NewsArticle } from '@/lib/news-types';

export default function NewsClient({ allArticles }: { allArticles: NewsArticle[] }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = [
    'Todas',
    'Avanços Científicos',
    'Pesquisa & Ensaios Clínicos',
    'Aprovações Terapêuticas',
    'Diretrizes Clínicas & Manejo',
    'Direitos no SUS',
    'Eventos ACADIM',
    'Histórias de Vida'
  ];

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
    <>
      {/* Filtros e Busca */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Categorias */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Filtro por Categoria">
          <Filter size={16} className="text-slate-500 shrink-0 hidden sm:block" aria-hidden="true" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap min-h-[44px] ${
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
            className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-border-focus"
          />
          <Search size={16} className="absolute left-3.5 top-3 text-slate-500" aria-hidden="true" />
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
                  <NewsImage
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
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-brand-red" aria-hidden="true" />
                      {formatDate(article.publishedAt)}
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
                  aria-label={`Ler matéria completa: ${article.title}`}
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
          <h3 className="text-xl font-bold text-text-primary">
            {allArticles.length === 0 ? 'Notícias em Curadoria' : 'Nenhum resultado encontrado'}
          </h3>
          <p className="text-sm text-slate-600">
            {allArticles.length === 0
              ? 'A Redação ACADIM está revisando os artigos e publicando os conteúdos na base do Airtable. Volte em instantes.'
              : `Não encontramos nenhuma notícia com o termo "${search}". Tente buscar por outros termos ou selecionar outra categoria.`}
          </p>
          {allArticles.length > 0 && (
            <button
              onClick={() => { setSearch(''); setSelectedCategory('Todas'); }}
              className="text-xs font-extrabold text-brand-red uppercase tracking-wider hover:underline pt-2"
            >
              Limpar Filtros
            </button>
          )}
        </div>
      )}
    </>
  );
}
