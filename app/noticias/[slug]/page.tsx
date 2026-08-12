import React from 'react';

import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ShareButton } from '@/components/ShareButton';
import { getNewsBySlugAsync, getAllNewsAsync } from '@/lib/news-data';
import { formatDate } from '@/lib/date-utils';
import { sanitizeHtml } from '@/lib/sanitize-html';
import { Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import MarkdownViewer from '@/components/MarkdownViewer';
import NewsImage from '@/components/NewsImage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await getAllNewsAsync();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlugAsync(slug);

  if (!article) {
    return {
      title: 'Notícia não encontrada | ACADIM',
    };
  }

  return {
    metadataBase: new URL('https://acadim.org.br'),
    title: `${article.title} | Notícias ACADIM`,
    description: article.excerpt,
    alternates: {
      canonical: `https://acadim.org.br/noticias/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://acadim.org.br/noticias/${article.slug}`,
      images: [article.coverImage],
      siteName: 'ACADIM Portal',
      locale: 'pt_BR',
      type: 'article',
    },
  };
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getNewsBySlugAsync(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllNewsAsync();
  const relatedArticles = allArticles
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
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Calendar size={14} className="text-brand-red" aria-hidden="true" />
              {formatDate(article.publishedAt, { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
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
                <div className="text-[10px] font-semibold text-slate-500">{article.author.role}</div>
              </div>
            </Link>

            <ShareButton />
          </div>
        </header>



        {/* Imagem de Destaque */}
        <div className="relative w-full h-72 sm:h-96 bg-slate-100">
          <NewsImage
            src={article.coverImage}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Conteúdo do Artigo */}
        <div className="p-6 sm:p-10">
          {article.contentFormat === 'markdown' ? (
            <MarkdownViewer source={article.content} />
          ) : (
            <div
              className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-text-primary prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base prose-strong:text-text-primary prose-li:text-slate-700 text-base"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
            />
          )}
        </div>

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
                  <NewsImage src={rel.coverImage} alt={rel.imageAlt} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-text-primary group-hover:text-brand-red transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-500 inline-flex items-center gap-1">
                    Ler <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
