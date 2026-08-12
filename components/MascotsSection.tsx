'use client';

import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

function FoundersIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-blue-50/60 via-white to-red-50/60 p-6 sm:p-8 border-2 border-brand-blue/15 shadow-xl flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 bg-radial from-brand-blue/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Badge Top */}
      <SectionBadge icon={Heart} text="Fundadores da ACADIM" variant="blue" className="z-10 bg-white/90 backdrop-blur mb-6" />

      {/* Founders Avatars Illustration — Containers com Dimensões Rigorosamente Idênticas (240x240px) */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
        
        {/* Clara Card */}
        <div className="bg-white rounded-3xl p-5 shadow-lg border border-red-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 w-full sm:w-auto">
          <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-2xl bg-red-50/70 border-2 border-brand-red flex items-center justify-center shadow-md mb-3 overflow-hidden p-2 mx-auto shrink-0">
            <Image
              src="/clara.png"
              alt="Clara — Fundadora da ACADIM"
              fill
              sizes="240px"
              className="object-contain p-2"
              priority
            />
          </div>
          <div className="space-y-0.5">
            <p className="font-display font-black text-base text-slate-900">Clara</p>
            <p className="text-xs font-extrabold text-brand-red">Fundadora da ACADIM</p>
            <p className="text-[11px] text-slate-500 font-medium">História e Representatividade</p>
          </div>
        </div>

        {/* Pedro Card — Container Rigorosamente Idêntico a Clara */}
        <div className="bg-white rounded-3xl p-5 shadow-lg border border-blue-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 w-full sm:w-auto shrink-0">
          <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-2xl bg-blue-50/70 border-2 border-brand-blue flex items-center justify-center shadow-md mb-3 overflow-hidden p-2 mx-auto shrink-0">
            <Image
              src="/pedro.png"
              alt="Pedro — Fundador da ACADIM"
              fill
              sizes="240px"
              className="object-contain p-2"
              priority
            />
          </div>
          <div className="space-y-0.5">
            <p className="font-display font-black text-base text-slate-900">Pedro</p>
            <p className="text-xs font-extrabold text-brand-blue">Fundador da ACADIM</p>
            <p className="text-[11px] text-slate-500 font-medium">História e Inspiração</p>
          </div>
        </div>

      </div>

      {/* Rodapé da Ilustração dos Fundadores */}
      <div className="z-10 w-full bg-brand-blue py-3 rounded-2xl shadow-md text-center mt-4">
        <span className="font-display font-black text-white text-base tracking-widest uppercase">
          ACADIM
        </span>
        <p className="text-xs text-white/90 font-medium">Acolhimento, Cidadania e Dignidade</p>
      </div>
    </div>
  );
}

export const MascotsSection: React.FC = () => {
  return (
    <section id="fundadores" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <SectionBadge icon={Heart} text="História Institucional" variant="red" className="mb-3" />
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                Conheça nossos <span className="text-brand-blue">Fundadores</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
              Clara e Pedro são os fundadores da ACADIM. Eles simbolizam a história, o propósito e a determinação que deram origem à nossa associação no Rio de Janeiro. Sua presença nos materiais institucionais reforça que o acesso ao cuidado, à autonomia e aos direitos é uma conquista que construímos juntos.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Origem e Propósito</h3>
                  <p className="text-xs text-slate-600">Representam os valores pioneiros de acolhimento e escrita de uma nova história para as famílias.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Conscientização e Cidadania</h3>
                  <p className="text-xs text-slate-600">Presentes em nossas cartilhas e campanhas pela eliminação de barreiras sociais e atitudinais.</p>
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
