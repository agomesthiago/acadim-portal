import React from 'react';
import { Smile } from 'lucide-react';
import { Reveal } from './Animations';
import { MascotsIllustration } from './MascotsIllustration';

export function MascotsSection() {
  return (
    <section id="mascotes" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-red-100 text-[#E31B23] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <Smile className="w-4 h-4" />
                Inclusão Representada
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] tracking-tight">
                Conheça nossos <span className="text-[#0066CC]">Mascotes</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Nossos mascotes simbolizam a alegria, a coragem e a resiliência das crianças e jovens atendidos pela ACADIM. Eles estampam nossos materiais educativos, eventos e campanhas de conscientização, reforçando que a vida em cadeira de rodas é cheia de possibilidades e sorrisos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B132B] text-sm">Representatividade Infantil</h4>
                    <p className="text-xs text-slate-600">Representam com orgulho a realidade dos nossos membros em todas as idades.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                  <div className="w-8 h-8 rounded-full bg-[#E31B23] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B132B] text-sm">Conscientização Escolar</h4>
                    <p className="text-xs text-slate-600">Usados em cartilhas de inclusão para combater o capacitismo nas escolas.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <MascotsIllustration />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
