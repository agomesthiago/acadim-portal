'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ArrowRight, ChevronDown, ShieldCheck, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenPixModal: () => void;
  onNavigateNext: () => void;
}

const HERO_IMAGES = [
  {
    src: '/assets/hero-bg.jpg',
    alt: 'Família e cuidador em momento de acolhimento na ACADIM'
  },
  {
    src: '/assets/hero-bg-2.jpg',
    alt: 'Profissional de saúde atenciosa e jovem paciente sorridente em atendimento na ACADIM'
  },
  {
    src: '/assets/hero-bg-3.jpg',
    alt: 'Encontro comunitário ao ar livre reunindo famílias, voluntários e profissionais da ACADIM'
  },
  {
    src: '/assets/hero-bg-4.jpg',
    alt: 'Comunidade da ACADIM unida em simpósio de conscientização sobre doenças neuromusculares'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPixModal, onNavigateNext }) => {
  // Estado da imagem selecionada (padrão 0 para SSR consistente, altera no mount)
  const [heroImage, setHeroImage] = useState(HERO_IMAGES[0]);

  useEffect(() => {
    // Escolhe aleatoriamente uma das 4 imagens de fundo a cada abertura/refresh
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setHeroImage(HERO_IMAGES[randomIndex]);
  }, []);

  return (
    <section id="hero" className="relative bg-slate-950 text-white pt-24 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Imagem de Fundo Dinâmica (Variável a cada abertura) */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        <Image 
          key={heroImage.src}
          src={heroImage.src} 
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Indicador de Identificação Institucional sem pill feio */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Associação Carioca de Distrofia Muscular
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.08] text-white">
            Bem vindo a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-red">ACADIM</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-slate-200 font-bold leading-relaxed max-w-2xl">
            Você não está sozinho. Nós caminhamos juntos.
          </p>

          {/* Botões de Ação Principais */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenPixModal}
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-black text-base min-h-[56px] px-8 rounded-xl shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 transition-all group uppercase tracking-wider"
              aria-label="Como doar"
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

      {/* Indicador de Scroll Animado */}
      <button 
        onClick={onNavigateNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 flex flex-col items-center justify-center gap-1 animate-bounce focus:outline-none min-h-[44px] min-w-[44px]"
        aria-label="Rolar para próxima seção"
      >
        <span className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-slate-400">Role</span>
        <ChevronDown size={18} className="text-brand-red" aria-hidden="true" />
      </button>
    </section>
  );
};
