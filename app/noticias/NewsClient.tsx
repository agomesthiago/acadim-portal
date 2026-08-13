'use client';

import React, { useState } from 'react';
import NewsImage from '@/components/NewsImage';
import Link from 'next/link';
import { formatDate } from '@/lib/date-utils';
import { Calendar, Clock, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';
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
    <div className="space-y-12">
      {/* Filtros e Busca Otimizados */}
      <div className="bg-surface-default border border-border-subtle p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
        
        {/* Barra Superior: Busca */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <label htmlFor="search-input" className="sr-only">Buscar Notícias</label>
            <input
              id="search-input"
              type="text"
              placeholder="Buscar por palavra-chave, tema ou medicamento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface-subtle border border-border-default pl-11 pr-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-brand-red transition-all"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          </div>

          <div className="text-xs font-black text-text-secondary bg-surface-subtle px-4 py-3.5 rounded-2xl border border-border-subtle text-center shrink-0">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'matéria encontrada' : 'matérias encontradas'}
          </div>
        </div>

        {/* Categorias (Chips Elegantes com Scroll/Wrap) */}
        <div className="space-y-3 pt-3 border-t border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-black text-text-secondary uppercase tracking-wider">
            <Filter size={14} className="text-brand-red shrink-0" aria-hidden="true" />
            <span>Filtrar por Categoria:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtro por Categoria">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer min-h-[44px] ${
                    isSelected
                      ? 'bg-brand-red text-white shadow-md ring-2 ring-brand-red/30'
                      : 'bg-surface-subtle text-text-secondary hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-text-primary'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Grid de Artigos com Cards Padronizados (rounded-3xl) */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-surface-default border border-border-subtle hover:border-brand-red rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative w-full h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <NewsImage
                    src={article.coverImage}
                    alt={article.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-surface-inverse text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-bold text-text-tertiary">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-brand-red" aria-hidden="true" />
                      {formatDate(article.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-text-primary leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-text-secondary leading-relaxed font-medium line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border-subtle mt-4">
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
        <div className="bg-surface-default border border-border-subtle rounded-3xl p-12 text-center max-w-xl mx-auto space-y-3 shadow-sm">
          <BookOpen size={32} className="mx-auto text-slate-400" />
          <h3 className="text-xl font-black text-text-primary">
            {allArticles.length === 0 ? 'Notícias em Curadoria' : 'Nenhum resultado encontrado'}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
            {allArticles.length === 0
              ? 'A Redação ACADIM está revisando os artigos e publicando os conteúdos na base do portal. Volte em instantes.'
              : `Não encontramos nenhuma notícia com o termo "${search}". Tente buscar por outros termos ou selecionar outra categoria.`}
          </p>
          {allArticles.length > 0 && (
            <button
              onClick={() => { setSearch(''); setSelectedCategory('Todas'); }}
              className="text-xs font-black text-brand-red uppercase tracking-wider hover:underline pt-2 cursor-pointer"
            >
              Limpar Filtros
            </button>
          )}
        </div>
      )}
    </div>
  );
}
