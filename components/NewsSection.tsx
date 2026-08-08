'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllNews } from '@/lib/news-data';

export const NewsSection: React.FC = () => {
  const articles = getAllNews().slice(0, 3); // Exibe os 3 mais recentes

  return (
    <section id="noticias" className="bg-slate-50 text-text-primary py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
                Informação & Conscientização
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary leading-tight">
              Notícias, Ciência & Conquistas no SUS.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Fique por dentro das atualizações sobre pesquisas clínicas, direitos das famílias e eventos promovidos pela ACADIM.
            </p>
          </div>

          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-sm font-black text-brand-red hover:text-brand-red-hover uppercase tracking-wider shrink-0 min-h-[44px] py-2 px-1 hover:underline group"
            aria-label="Ver todas as notícias e artigos da ACADIM"
          >
            <span>Ver Todas as Notícias</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </header>

        {/* Grid das Notícias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-border-default transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Imagem de Capa */}
                <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
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

                {/* Conteúdo */}
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
                      <Clock size={13} className="text-slate-400" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-text-primary leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Link de Leitura */}
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

      </div>
    </section>
  );
};
