/* Desenvolvido por Thiago Gomes (https://www.instagram.com/agomes.thiago83/) / Nix Society (https://www.instagram.com/nixsociety) para a ACADIM. */
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Newspaper } from 'lucide-react';
import { getAllNewsAsync } from '@/lib/news-data';
import NewsClient from './NewsClient';
import { Metadata } from 'next';
import { safeJsonLd } from '@/lib/sanitize-html';

export const metadata: Metadata = {
  metadataBase: new URL('https://acadim.org.br'),
  title: 'Notícias, Ciência e Direitos em Distrofia Muscular | ACADIM',
  description: 'Acompanhe as últimas notícias, pesquisas científicas, decisões da ANVISA/SUS e guias de direitos para pessoas com distrofias musculares.',
  alternates: {
    canonical: 'https://acadim.org.br/noticias',
  },
  openGraph: {
    title: 'Central de Notícias & Ciência | ACADIM',
    description: 'Avanços científicos, pesquisas, novos tratamentos e defesa de direitos nas doenças neuromusculares.',
    url: 'https://acadim.org.br/noticias',
    siteName: 'ACADIM Portal',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const revalidate = 60; // Revalidação periódica

export default async function NoticiasPage() {
  const allArticles = await getAllNewsAsync();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Notícias, Ciência e Direitos em Distrofia Muscular — ACADIM',
    url: 'https://acadim.org.br/noticias',
    description: 'Central de Notícias, pesquisas científicas e guias de direitos sobre distrofias musculares.',
    itemListElement: allArticles.slice(0, 10).map((art, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://acadim.org.br/noticias/${art.slug}`,
      name: art.title,
    })),
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      
      {/* Breadcrumb / Navegação Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-brand-red transition-colors min-h-[44px]"
          aria-label="Voltar ao início"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar para o Início</span>
        </Link>
        <span className="text-[11px] font-bold text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
          <span>Atualização Contínua</span>
        </span>
      </div>

      {/* Header Cognitivo Padronizado (Mesmo estilo de /distrofias e /alerta-medico) */}
      <div className="bg-surface-inverse text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/20 text-brand-red font-extrabold text-xs uppercase tracking-wider">
            <Newspaper size={14} />
            <span>Central de Notícias & Informação em Saúde</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Notícias, Ciência & Cidadania na ACADIM
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Acompanhe em tempo real as novidades sobre ensaios clínicos, conquistas de medicamentos no SUS, encontros da comunidade e artigos educativos sobre distrofia muscular.
          </p>
        </div>
      </div>

      {/* Listagem com Filtros Cliente */}
      <NewsClient allArticles={allArticles} />
    </div>
  );
}
