'use client';

import React from 'react';
import { Check, ArrowRight, Heart, Users } from 'lucide-react';
import { usePix } from '@/context/PixContext';
import { SectionBadge } from './SectionBadge';

export const DualTargetImpact: React.FC = () => {
  const { openPixModal } = usePix();

  return (
    <section id="impacto" className="py-24 lg:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <SectionBadge icon={Users} text="Rede de Apoio & Impacto" variant="red" className="mb-4" />
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
              Junte-se à nossa <span className="text-[#E31B23]">Rede de Apoio</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Seja buscando apoio direto para você e sua família, seja investindo como doador ou parceiro.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Box 1: Portadores */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-100/60 rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-all">
            <div>
              <SectionBadge text="Para Portadores & Cuidadores" variant="blue" className="mb-6" />
              <h3 className="font-display font-black text-3xl text-[#0B132B] mb-4">
                Precisa de apoio ou orientação?
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Cadastre-se para ter acesso gratuito ao nosso acolhimento, grupos de conversa, material educativo e orientação jurídica especializada.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Atendimento acolhedor sem custos',
                  'Orientações médicas e fisioterápicas',
                  'Defesa dos seus direitos assegurados',
                  'Acolhimento caloroso pela comunidade',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0066CC] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#004499] hover:scale-[1.02] transition-all text-center min-h-[44px]"
            >
              <span>Quero me cadastrar</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Box 2: Investidores */}
          <div className="bg-gradient-to-br from-red-50 to-amber-100/50 rounded-3xl p-8 sm:p-10 border border-red-200 shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-all">
            <div>
              <SectionBadge text="Para Doadores & Empresas" variant="red" className="mb-6" />
              <h3 className="font-display font-black text-3xl text-[#0B132B] mb-4">
                Quer investir no impacto social?
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Sua contribuição sustenta projetos que levam dignidade e saúde para centenas de famílias no Rio de Janeiro com prestação de contas transparente.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Transparência com relatórios regulares',
                  'Certificado de investimento social responsável',
                  'Selo de empresa parceira oficial da ACADIM',
                  'Dedução fiscal conforme legislação vigente',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#E31B23] text-white flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openPixModal}
              className="inline-flex items-center justify-center gap-2 bg-[#E31B23] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#b91c1c] hover:scale-[1.02] transition-all text-center min-h-[44px]"
            >
              <span>Como Doar Agora</span>
              <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
