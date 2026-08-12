'use client';

import React from 'react';
import NewsImage from '@/components/NewsImage';
import Link from 'next/link';
import { Heart, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { usePix } from '@/context/PixContext';
import { HeroData } from '@/lib/hero/local-store';

interface HeroSectionProps {
  heroData: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroData }) => {
  const { openPixModal } = usePix();

  const renderCta1 = () => {
    if (heroData.cta1Action === 'pix') {
      return (
        <button
          onClick={openPixModal}
          className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 transition-all group uppercase tracking-wider"
          aria-label={heroData.cta1Text}
        >
          <Heart size={20} className="fill-current group-hover:scale-110 transition-transform" />
          <span>{heroData.cta1Text}</span>
        </button>
      );
    }

    const isExternal = heroData.cta1Action.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={heroData.cta1Action}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 transition-all group uppercase tracking-wider"
        >
          <Heart size={20} className="fill-current group-hover:scale-110 transition-transform" />
          <span>{heroData.cta1Text}</span>
        </a>
      );
    }

    return (
      <Link
        href={heroData.cta1Action}
        className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 transition-all group uppercase tracking-wider"
      >
        <Heart size={20} className="fill-current group-hover:scale-110 transition-transform" />
        <span>{heroData.cta1Text}</span>
      </Link>
    );
  };

  const renderCta2 = () => {
    const isExternal = heroData.cta2Action.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={heroData.cta2Action}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base min-h-[56px] px-7 rounded-xl backdrop-blur-md border border-white/20 transition-all uppercase tracking-wider"
        >
          <span>{heroData.cta2Text}</span>
          <ArrowRight size={18} />
        </a>
      );
    }

    return (
      <Link
        href={heroData.cta2Action}
        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base min-h-[56px] px-7 rounded-xl backdrop-blur-md border border-white/20 transition-all uppercase tracking-wider"
      >
        <span>{heroData.cta2Text}</span>
        <ArrowRight size={18} />
      </Link>
    );
  };

  return (
    <section
      id="hero"
      aria-label="Destaque Principal — ACADIM"
      className="relative bg-slate-950 text-white pt-24 pb-20 lg:py-28 min-h-[calc(100dvh-5rem)] flex flex-col justify-center overflow-hidden border-b border-white/10"
    >
      {/* Imagem de Fundo Estática */}
      <div className="absolute inset-0 z-0">
        <NewsImage
          src={heroData.bgImage}
          alt={heroData.bgAlt}
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-6 text-left">

          {/* Pill / Tag */}
          <div className="inline-flex items-center gap-2.5 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
              {heroData.tag}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.08] text-white">
            {heroData.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl">
            {heroData.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            {heroData.cta1Text && renderCta1()}
            {heroData.cta2Text && renderCta2()}
          </div>

          {/* Selos de Transparência */}
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

        </div>
      </div>
    </section>
  );
};
