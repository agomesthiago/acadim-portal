'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

function FoundersIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto p-4 sm:p-8 flex flex-col items-center justify-center">
      {/* Auras Orgânicas de Fundo (Sem Caixas) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Ilustrações Livres e Orgânicas dos Mascotes */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-8 my-6">
        
        {/* Clara — Livre e Flutuante */}
        <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2 duration-300">
          {/* Balão de Fala Divertido */}
          <div className="mb-2 bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-lg border border-red-200 text-xs font-black flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span>Clara — Fundadora</span>
          </div>

          {/* Imagem Sem Moldura Retangular */}
          <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] drop-shadow-xl flex items-center justify-center">
            <Image
              src="/clara.png"
              alt="Clara — Fundadora da ACADIM em sua cadeira de rodas motorizada"
              fill
              sizes="250px"
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="text-center mt-2 space-y-0.5">
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-brand-red font-black text-xs">
              História e Representatividade
            </span>
          </div>
        </div>

        {/* Pedro — Livre e Flutuante */}
        <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2 duration-300">
          {/* Balão de Fala Divertido */}
          <div className="mb-2 bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-lg border border-blue-200 text-xs font-black flex items-center gap-1.5 animate-bounce [animation-delay:300ms]">
            <Heart className="w-3.5 h-3.5 text-brand-blue shrink-0 fill-brand-blue" />
            <span>Pedro — Fundador</span>
          </div>

          {/* Imagem Sem Moldura Retangular */}
          <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] drop-shadow-xl flex items-center justify-center">
            <Image
              src="/pedro.png"
              alt="Pedro — Fundador da ACADIM com sorriso confiante"
              fill
              sizes="250px"
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="text-center mt-2 space-y-0.5">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-brand-blue font-black text-xs">
              História e Inspiração
            </span>
          </div>
        </div>

      </div>

      {/* Faixa Divertida e Humanizada sem Caixas Rígidas */}
      <div className="relative z-10 w-full max-w-md bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-red p-0.5 rounded-full shadow-lg mt-2">
        <div className="bg-white dark:bg-slate-900 py-3 px-6 rounded-full text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
          <span className="font-display font-black text-slate-900 dark:text-white text-xs sm:text-sm tracking-wide uppercase">
            ACADIM — Acolhimento, Cidadania e Dignidade
          </span>
        </div>
      </div>
    </div>
  );
}

export const MascotsSection: React.FC = () => {
  return (
    <section id="fundadores" className="py-20 lg:py-24 bg-surface-subtle relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <SectionBadge icon={Heart} text="História Institucional" variant="red" className="mb-3" />
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Conheça nossos <span className="text-brand-blue">Fundadores</span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              Clara e Pedro são os fundadores da ACADIM. Eles simbolizam a história, o propósito e a determinação que deram origem à nossa associação no Rio de Janeiro. Sua presença nos materiais institucionais reforça que o acesso ao cuidado, à autonomia e aos direitos é uma conquista que construímos juntos.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-blue-100 dark:border-blue-900 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shrink-0" aria-hidden="true">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Origem e Propósito</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Representam os valores pioneiros de acolhimento e escrita de uma nova história para as famílias.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-red-100 dark:border-red-900 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm shrink-0" aria-hidden="true">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Conscientização e Cidadania</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Presentes em nossas cartilhas e campanhas pela eliminação de barreiras sociais e atitudinais.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <FoundersIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};
