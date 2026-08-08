'use client';

import React from 'react';
import { Smile } from 'lucide-react';

function MascotsIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 border-2 border-[#0066CC]/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-radial from-[#0066CC]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Badge Top */}
      <div className="z-10 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-[#0066CC]/20 shadow-sm flex items-center gap-2">
        <Smile className="w-4 h-4 text-[#E31B23]" aria-hidden="true" />
        <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider">Nossos Mascotes Oficiais</span>
      </div>

      {/* Mascot Avatars Illustration */}
      <div className="relative z-10 w-full flex items-center justify-center gap-4 my-2">
        {/* Girl Mascot Card */}
        <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-red-100 flex flex-col items-center text-center hover:-translate-y-1 hover:scale-[1.02] transition-transform">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-pink-200 to-yellow-100 border-4 border-[#E31B23] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-2 w-16 h-10 bg-yellow-300 rounded-t-full border-b-2 border-yellow-500" />
            <div className="absolute top-6 w-10 h-7 bg-sky-400 rounded-md border-2 border-sky-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
              <div className="w-3 h-3 rounded-full bg-white border border-sky-700" />
            </div>
            <div className="absolute bottom-2 w-8 h-2 bg-red-400 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nossa Heroína</p>
          <p className="text-[11px] text-slate-500">Cadeira vermelha & óculos azuis</p>
        </div>

        {/* Boy Mascot Card */}
        <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:-translate-y-1 hover:scale-[1.02] transition-transform">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 to-yellow-100 border-4 border-[#0066CC] flex items-center justify-center shadow-md mb-2 overflow-hidden">
            {/* Character Graphic */}
            <div className="absolute top-1 w-16 h-8 bg-slate-900 rounded-t-full" />
            <div className="absolute top-8 w-12 h-6 flex items-center justify-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>
            <div className="absolute bottom-2 w-7 h-2 bg-red-500 rounded-full" />
          </div>
          <p className="font-display font-bold text-sm text-[#0B132B]">Nosso Campeão</p>
          <p className="text-[11px] text-slate-500">Cadeira amarela & camiseta vermelha</p>
        </div>
      </div>

      {/* Official ACADIM Mascot Pill Footer */}
      <div className="z-10 w-full bg-[#0066CC] py-2.5 rounded-xl shadow-md text-center">
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
              <div className="inline-flex items-center gap-2 bg-red-100 text-[#E31B23] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                <Smile className="w-4 h-4" aria-hidden="true" />
                Inclusão Representada
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] tracking-tight">
                Conheça nossos <span className="text-[#0066CC]">Mascotes</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Nossos mascotes simbolizam a alegria, a coragem e a resiliência das crianças e jovens atendidos pela ACADIM. Eles estampam nossos materiais educativos, eventos e campanhas de conscientização, reforçando que a vida em cadeira de rodas é cheia de possibilidades e sorrisos.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-[#0B132B] text-sm">Representatividade Infantil</h3>
                  <p className="text-xs text-slate-600">Representam com orgulho a realidade dos nossos membros em todas as idades.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                <div className="w-8 h-8 rounded-full bg-[#E31B23] text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-[#0B132B] text-sm">Conscientização Escolar</h3>
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
