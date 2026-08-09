'use client';

import React from 'react';
import Image from 'next/image';
import { Smile } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

function MascotsIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 border-2 border-brand-blue/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-radial from-brand-blue/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Badge Top */}
      <SectionBadge icon={Smile} text="Nossos Mascotes Fundadores" variant="blue" className="z-10 bg-white/90 backdrop-blur" />

      {/* Mascot Avatars Illustration — Tamanho 100% Idêntico para Clara e Pedro */}
      <div className="relative z-10 w-full flex items-stretch justify-center gap-4 my-2">
        {/* Clara Card */}
        <div className="flex-1 w-1/2 bg-white rounded-2xl p-4 shadow-lg border border-red-100 flex flex-col items-center justify-between text-center hover:-translate-y-1 transition-transform">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-red-50/80 border-2 border-brand-red flex items-center justify-center shadow-md mb-2 overflow-hidden p-2 shrink-0">
            <Image
              src="/clara.png"
              alt="Clara — Mascote Fundadora da ACADIM"
              fill
              sizes="(max-width: 640px) 128px, 144px"
              className="object-contain p-1"
            />
          </div>
          <div className="space-y-0.5">
            <p className="font-display font-black text-sm text-slate-900">Clara</p>
            <p className="text-[11px] font-bold text-brand-red">Nossa Heroína</p>
            <p className="text-[11px] text-slate-500">Mascote Fundadora</p>
          </div>
        </div>

        {/* Pedro Card */}
        <div className="flex-1 w-1/2 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 flex flex-col items-center justify-between text-center hover:-translate-y-1 transition-transform">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-blue-50/80 border-2 border-brand-blue flex items-center justify-center shadow-md mb-2 overflow-hidden p-2 shrink-0">
            <Image
              src="/pedro.png"
              alt="Pedro — Mascote Fundador da ACADIM"
              fill
              sizes="(max-width: 640px) 128px, 144px"
              className="object-contain p-1"
            />
          </div>
          <div className="space-y-0.5">
            <p className="font-display font-black text-sm text-slate-900">Pedro</p>
            <p className="text-[11px] font-bold text-brand-blue">Nosso Campeão</p>
            <p className="text-[11px] text-slate-500">Mascote Fundador</p>
          </div>
        </div>
      </div>

      {/* Official ACADIM Mascot Pill Footer */}
      <div className="z-10 w-full bg-brand-blue py-2.5 rounded-xl shadow-md text-center">
        <span className="font-display font-black text-white text-lg tracking-widest uppercase">
          ACADIM
        </span>
        <p className="text-[10px] text-white/90 font-medium">Inclusão, Alegria e Caminhada Juntos</p>
      </div>
    </div>
  );
}

export const MascotsSection: React.FC = () => {
  return (
    <section id="mascotes" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <SectionBadge icon={Smile} text="Inclusão Representada" variant="red" className="mb-3" />
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
                Conheça nossos <span className="text-brand-blue">Mascotes</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Clara e Pedro são os mascotes fundadores que simbolizam a alegria, a coragem e a resiliência das crianças e jovens atendidos pela ACADIM. Eles estampam nossos materiais educativos, eventos e campanhas de conscientização, reforçando que a vida em cadeira de rodas é cheia de possibilidades e sorrisos.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Representatividade Infantil</h3>
                  <p className="text-xs text-slate-600">Representam com orgulho a realidade dos nossos membros em todas as idades.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Conscientização Escolar</h3>
                  <p className="text-xs text-slate-600">Usados em cartilhas de inclusão para combater o capacitismo nas escolas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <MascotsIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};
