'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, ShieldCheck, Users, ChevronLeft, ChevronRight, Newspaper, Calendar } from 'lucide-react';
import { usePix } from '@/context/PixContext';
import { formatDate } from '@/lib/date-utils';
import { NewsArticle } from '@/lib/news-types';

interface HeroSlide {
  id: string;
  isMain: boolean;
  tag: string;
  title: string;
  subtitle: string;
  bgImage: string;
  bgAlt: string;
  slug?: string;
  date?: string;
  readTime?: string;
}

interface HeroSectionProps {
  latestNews: NewsArticle[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ latestNews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openPixModal } = usePix();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Usa as 3 notícias passadas via props, mas recorta só para garantir
  const topNews = latestNews.slice(0, 3);

  // 4 Slides Totais: Slide 0 (Institucional) + 3 Notícias
  const slides: HeroSlide[] = [
    {
      id: 'main-hero',
      isMain: true,
      tag: 'Associação Carioca de Distrofia Muscular',
      title: 'Bem-vindo à ACADIM',
      subtitle: 'Você não está sozinho. Nós caminhamos juntos pelo acolhimento, saúde e direitos.',
      bgImage: '/assets/hero-bg.jpg',
      bgAlt: 'Família e comunidade ACADIM reunidos com acolhimento',
    },
    ...topNews.map((article, idx) => ({
      id: `news-${idx}`,
      isMain: false,
      tag: article.category,
      title: article.title,
      subtitle: article.excerpt,
      bgImage: article.coverImage,
      bgAlt: article.imageAlt,
      slug: article.slug,
      date: formatDate(article.publishedAt),
      readTime: article.readTime,
    })),
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay a cada 7 segundos, pausado em hover ou foco
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Carrossel em Destaque — ACADIM"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative bg-slate-950 text-white pt-24 pb-20 lg:py-28 min-h-[calc(100dvh-5rem)] flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Imagem de Fundo Dinâmica com Overlay Institucional Vibrante */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={s.bgImage}
            alt={s.bgAlt}
            fill
            priority={index === 0}
            className="object-cover object-center scale-105 filter brightness-75"
          />
          {/* Overlay de Gradiente Institucional de Alta Legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Conteúdo Principal do Slide Ativo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-6 text-left">
          
          {/* Tag do Slide */}
          <div className="inline-flex items-center gap-2.5 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
              {slide.tag}
            </span>
            {!slide.isMain && slide.date && (
              <span className="text-xs text-slate-300 font-semibold border-l border-white/20 pl-2.5 flex items-center gap-1">
                <Calendar size={12} />
                {slide.date}
              </span>
            )}
          </div>

          {/* Headline Principal */}
          {slide.isMain ? (
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.08] text-white">
              Bem-vindo à <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-red">ACADIM</span>
            </h1>
          ) : (
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight leading-snug text-white line-clamp-2">
              {slide.title}
            </h1>
          )}

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl line-clamp-3">
            {slide.subtitle}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            {slide.isMain ? (
              <>
                <button
                  onClick={openPixModal}
                  className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 transition-all group uppercase tracking-wider"
                  aria-label="Como doar via PIX"
                >
                  <Heart size={20} className="fill-current group-hover:scale-110 transition-transform" />
                  <span>COMO DOAR (PIX)</span>
                </button>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base min-h-[56px] px-7 rounded-xl backdrop-blur-md border border-white/20 transition-all uppercase tracking-wider"
                >
                  <span>CADASTRE-SE</span>
                  <ArrowRight size={18} />
                </a>
              </>
            ) : (
              <Link
                href={`/noticias/${slide.slug}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 transition-all uppercase tracking-wider group"
              >
                <Newspaper size={20} />
                <span>LER MATÉRIA COMPLETA</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Selos de Transparência no Slide Principal */}
          {slide.isMain && (
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-slate-300 text-xs font-bold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-400" aria-hidden="true" />
                <span>100% Transparência Fiscal</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-brand-blue-vibrant" aria-hidden="true" />
                <span>Filiada à Aliança Distrofia Brasil (ADB)</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Controles do Carrossel (Setas e Indicadores de Slide) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Indicadores de Slide (Tabs) */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Seleção de Slide do Hero">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              role="tab"
              aria-selected={currentSlide === idx}
              aria-label={`Slide ${idx + 1}: ${s.tag}`}
              className={`h-2.5 rounded-full transition-all duration-300 min-h-[44px] flex items-center px-1 ${
                currentSlide === idx
                  ? 'w-10 bg-brand-red'
                  : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Setas de Navegação Manual */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-sm min-h-[44px] min-w-[44px]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-sm min-h-[44px] min-w-[44px]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};
