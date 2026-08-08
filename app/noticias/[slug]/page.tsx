'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HeaderNav } from '@/components/HeaderNav';
import { PixModal } from '@/components/PixModal';
import { getNewsBySlug, getAllNews } from '@/lib/news-data';
import { sanitizeHtml } from '@/lib/sanitize-html';
import { Calendar, Clock, ArrowLeft, Share2, Check, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export default function NoticiaPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [isPixOpen, setIsPixOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const article = getNewsBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-xl border border-slate-200">
          <h1 className="text-2xl font-black text-text-primary">Notícia não encontrada</h1>
          <p className="text-sm text-slate-600">O artigo solicitado não existe ou foi movido.</p>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 bg-surface-inverse text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            Voltar para Notícias
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const relatedArticles = getAllNews()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  // Schema JSON-LD para Artigo de Notícia no Google (WCAG / GEO / Schema.org)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: [`https://acadim.org.br${article.coverImage}`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author.name,
      url: 'https://acadim.org.br/redacao',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ACADIM — Associação Carioca de Distrofia Muscular',
      url: 'https://acadim.org.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://acadim.org.br/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://acadim.org.br/noticias/${article.slug}`,
    },
    articleSection: article.category,
    citation: article.primarySource ? article.primarySource.url : undefined,
    sourceOrganization: article.primarySource ? {
      '@type': 'Organization',
      name: article.primarySource.name,
      sameAs: article.primarySource.url,
    } : undefined,
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://acadim.org.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Notícias',
        item: 'https://acadim.org.br/noticias',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://acadim.org.br/noticias/${article.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeaderNav onOpenPixModal={() => setIsPixOpen(true)} />

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-red transition-colors min-h-[44px]"
            aria-label="Voltar para a central de notícias"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Voltar para Notícias</span>
          </Link>

          <Link
            href="/redacao"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-blue"
          >
            <ShieldCheck size={14} className="text-brand-red" />
            <span>Política Editorial & Redação</span>
          </Link>
        </div>

        {/* Artigo Principal */}
        <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header do Artigo */}
          <header className="p-6 sm:p-10 border-b border-slate-100 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-surface-inverse text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <Calendar size={14} className="text-brand-red" aria-hidden="true" />
                {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <Clock size={14} aria-hidden="true" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-text-primary leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-brand-red pl-4 py-1 italic">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-4">
              <Link
                href="/redacao"
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-black text-xs flex items-center justify-center">
                  AC
                </div>
                <div>
                  <div className="text-xs font-extrabold text-text-primary group-hover:text-brand-red flex items-center gap-1">
                    <span>{article.author.name}</span>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400">{article.author.role}</div>
                </div>
              </Link>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors min-h-[44px]"
                aria-label="Compartilhar matéria"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
                <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
              </button>
            </div>
          </header>

          {/* Fonte Primária Externa (Atribuição Ética) */}
          {article.primarySource && (
            <div className="bg-slate-50 border-b border-slate-200 p-4 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[10px]">
                  Fonte Original & Atribuição:
                </span>
                <div className="font-semibold text-slate-700">
                  {article.primarySource.title || article.primarySource.name}
                </div>
              </div>
              <a
                href={article.primarySource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-brand-blue text-brand-blue font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0"
              >
                <span>Acessar Publicação Original</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}

          {/* Imagem de Destaque */}
          <div className="relative w-full h-72 sm:h-96 bg-slate-100">
            <Image
              src={article.coverImage}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Conteúdo HTML do Artigo (Sanitizado) */}
          <div
            className="p-6 sm:p-10 prose prose-slate max-w-none prose-headings:font-black prose-headings:text-text-primary prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base prose-strong:text-text-primary prose-li:text-slate-700 text-base"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
          />

          {/* Rodapé do Artigo & Tags */}
          <footer className="p-6 sm:p-10 bg-slate-50 border-t border-slate-200 space-y-6">
            {article.tags && article.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-500">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Institucional */}
            <div className="bg-surface-inverse rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black">Precisa de suporte ou orientação médica no RJ?</h3>
                <p className="text-xs text-slate-300 mt-1">Conectamos famílias a especialistas e direitos garantidos por lei.</p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Cadastre-se na ACADIM
              </a>
            </div>
          </footer>
        </article>

        {/* Notícias Relacionadas */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-black text-text-primary">Outras Leituras Recomendadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/noticias/${rel.slug}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-border-default transition-all flex items-start gap-4 group"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <Image src={rel.coverImage} alt={rel.imageAlt} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-text-primary group-hover:text-brand-red transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <span className="text-xs font-bold text-slate-400 inline-flex items-center gap-1">
                      Ler <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <PixModal isOpen={isPixOpen} onClose={() => setIsPixOpen(false)} />
    </div>
  );
}
