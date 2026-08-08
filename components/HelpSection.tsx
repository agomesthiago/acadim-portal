'use client';

import React from 'react';
import { Heart, Users, Building2, FileText, ArrowRight } from 'lucide-react';

interface HelpSectionProps {
  onOpenPixModal: () => void;
}

export const HelpSection: React.FC<HelpSectionProps> = ({ onOpenPixModal }) => {
  return (
    <section id="ajudar" className="bg-white text-text-primary py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Rede de Apoio & Engajamento
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary leading-tight">
            Descubra como você pode fazer parte dessa corrente do bem.
          </h2>

          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Acompanhe nosso trabalho, informe-se sobre a causa e caminhe conosco. Cada doação, voluntariado ou parceria empresarial fortalece as famílias atendidas no Rio de Janeiro.
          </p>
        </header>

        {/* Grid 2x2 de Ações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Doação PIX */}
          <article className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-md">
                  <Heart size={24} className="fill-current" aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold text-brand-red uppercase tracking-wider">
                  Doação Única ou Mensal
                </span>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-2">Doe via PIX</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                Sua contribuição financeira direta ajuda no financiamento de fraldas, órteses, exames não cobertos e no suporte logístico às famílias de baixa renda no RJ.
              </p>
            </div>
            <button
              onClick={onOpenPixModal}
              className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-black py-3.5 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide min-h-[44px]"
            >
              <span>Fazer doação agora (PIX)</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>

          {/* Card 2: Voluntariado */}
          <article className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-vibrant text-white flex items-center justify-center shadow-md">
                  <Users size={24} aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold text-brand-blue-vibrant uppercase tracking-wider">
                  Tempo & Conhecimento
                </span>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-2">Seja Voluntário</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                Doe seu talento profissional (médicos, fisioterapeutas, advogados, comunicadores) ou apoie a organização de eventos e simpósios da ONG.
              </p>
            </div>
            <a
              href="#contato"
              className="w-full text-center bg-surface-inverse hover:bg-slate-800 text-white font-black py-3.5 px-4 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wide min-h-[44px] flex items-center justify-center"
            >
              Quero Voluntariar
            </a>
          </article>

          {/* Card 3: Empresas */}
          <article className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-surface-inverse text-white flex items-center justify-center shadow-md">
                  <Building2 size={24} aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Responsabilidade Social
                </span>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-2">Empresas Parceiras</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                Conecte a marca da sua empresa a uma causa de alto impacto social no Rio de Janeiro, com relatórios claros de transparência e governança.
              </p>
            </div>
            <a
              href="mailto:acadim.rj@gmail.com?subject=Parceria%20Empresarial%20ACADIM"
              className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-black py-3.5 px-4 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wide min-h-[44px] flex items-center justify-center"
            >
              Falar com Diretoria
            </a>
          </article>

          {/* Card 4: Imposto de Renda */}
          <article className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <FileText size={24} aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                  Destinação de Impostos
                </span>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-2">Doe pelo Imposto de Renda</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                Pessoas físicas e jurídicas podem destinar até 6% do Imposto de Renda devido sem desembolsar nada a mais durante a declaração anual.
              </p>
            </div>
            <a
              href="#contato"
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 px-4 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wide min-h-[44px] flex items-center justify-center"
            >
              Saiba Como Destinar
            </a>
          </article>

        </div>

      </div>
    </section>
  );
};
