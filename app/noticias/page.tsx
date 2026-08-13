import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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

export const revalidate = 60; // Força revalidação no servidor caso a configuração do fetch falhe

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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red font-black text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          Central de Notícias & Informação
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary leading-tight">
          Notícias, Ciência & Cidadania na ACADIM
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Acompanhe em tempo real as novidades sobre ensaios clínicos, conquistas de medicamentos no SUS, encontros da comunidade e artigos educativos sobre distrofia muscular.
        </p>
      </header>

      {/* Listagem com Filtros Cliente */}
      <NewsClient allArticles={allArticles} />
    </div>
  );
}
