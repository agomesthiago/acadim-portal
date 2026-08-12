'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, ExternalLink, MessageSquare, BookOpen, ArrowRight, HelpCircle, Search, Stethoscope, Scale } from 'lucide-react';
import { usePix } from '@/context/PixContext';
import { SectionBadge } from './SectionBadge';

export const ContactSection: React.FC = () => {
  const { openPixModal } = usePix();

  const whatsappUrl = "https://wa.me/5521994412104?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20ajuda%20e%20informa%C3%A7%C3%B5es%20sobre%20a%20ACADIM.";
  const mapsUrl = "https://maps.google.com/?q=Rua+Pinhara,+215,+Bento+Ribeiro,+Rio+de+Janeiro+-+RJ,+21540-650";

  const pathologyPathways = [
    {
      icon: HelpCircle,
      title: "Quero entender o que é uma distrofia muscular",
      desc: "Entenda em linguagem simples como a genética afeta os músculos.",
      href: "/distrofias#o-que-e",
      color: "text-brand-red bg-red-50 dark:bg-red-950/20 border-red-100",
    },
    {
      icon: Search,
      title: "Estou procurando uma doença específica",
      desc: "Pesquise por nome popular, sigla (DMD, DMB, LGMD), gene ou CID.",
      href: "/distrofias#encontre-uma-condicao",
      color: "text-brand-blue bg-blue-50 dark:bg-blue-950/20 border-blue-100",
    },
    {
      icon: Stethoscope,
      title: "Quero entender sintomas e diagnóstico",
      desc: "Veja como funcionam o exame de CK e o laudo genético no SUS.",
      href: "/distrofias/duchenne#sintomas",
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100",
    },
    {
      icon: Scale,
      title: "Quero conhecer meus direitos no SUS",
      desc: "Guia prático para solicitação de órteses, cadeira de rodas e medicamentos.",
      href: "/noticias/direitos-sus-medicamentos-orteses-guia",
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20 border-purple-100",
    },
  ];

  return (
    <section id="contato" className="bg-gradient-to-b from-surface-subtle via-surface-default to-surface-subtle text-text-primary py-20 border-t border-border-default relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl space-y-4">
          <SectionBadge icon={MessageSquare} text="Canais de Atendimento & Contato" variant="red" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary leading-tight">
            Entre em contato e construa esse futuro conosco.
          </h2>

          <p className="text-base text-text-secondary leading-relaxed font-normal">
            Nossa equipe no Rio de Janeiro está pronta para acolher sua família, prestar orientações e responder dúvidas sobre nossas atividades.
          </p>
        </header>

        {/* Bloco Central: "Compreenda a Patologia" (Substituindo a Newsletter) & Canais Oficiais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SEÇÃO "COMPREENDA A PATOLOGIA" — PONTE HOME → ENCICLOPÉDIA */}
          <div className="lg:col-span-7 bg-surface-subtle p-7 sm:p-8 rounded-3xl border border-border-subtle space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-black text-brand-red uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen size={16} />
                <span>Orientação Inicial</span>
              </span>
              <h3 className="text-2xl font-black text-text-primary tracking-tight">
                Compreenda a Patologia
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                Você não precisa conhecer o nome técnico da doença para começar a entender o que está acontecendo. Escolha um dos caminhos abaixo:
              </p>
            </div>

            {/* 4 Caminhos Simples */}
            <div className="grid grid-cols-1 gap-3">
              {pathologyPathways.map((pathway, idx) => {
                const Icon = pathway.icon;
                return (
                  <Link
                    key={idx}
                    href={pathway.href}
                    className="bg-surface-default hover:bg-white p-4 rounded-2xl border border-border-subtle hover:border-brand-red/40 hover:shadow-md transition-all flex items-start gap-3.5 group min-h-[44px]"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${pathway.color}`}>
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-xs sm:text-sm text-text-primary group-hover:text-brand-red transition-colors flex items-center justify-between gap-2">
                        <span>{pathway.title}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                      </h4>
                      <p className="text-[11px] sm:text-xs text-text-tertiary mt-0.5 font-medium line-clamp-2">
                        {pathway.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Dados de Contato Direto */}
          <address className="lg:col-span-5 bg-surface-subtle p-7 sm:p-8 rounded-3xl border border-border-subtle space-y-6 not-italic text-sm shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-text-primary mb-2">Canais Oficiais</h3>
              
              <div className="flex items-center gap-3 text-text-secondary bg-surface-default p-3.5 rounded-2xl border border-border-subtle">
                <Mail size={18} className="text-brand-red shrink-0" aria-hidden="true" />
                <a href="mailto:acadim.rj@gmail.com" className="hover:text-brand-blue transition-colors font-semibold text-xs sm:text-sm">acadim.rj@gmail.com</a>
              </div>

              <div className="flex items-start gap-3 text-text-secondary bg-surface-default p-3.5 rounded-2xl border border-border-subtle">
                <Phone size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col font-medium gap-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-blue transition-colors flex items-center gap-1.5 text-brand-red font-extrabold text-xs sm:text-sm"
                    aria-label="Falar com a ACADIM pelo WhatsApp (abre em nova janela)"
                  >
                    <span>(21) 99441-2104 — WhatsApp (Pedir Ajuda)</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                  <a href="tel:+552125025766" className="hover:text-brand-blue transition-colors text-xs text-text-tertiary font-bold">(21) 2502-5766 (Telefone Fixo)</a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-text-secondary bg-surface-default p-3.5 rounded-2xl border border-border-subtle">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-xs sm:text-sm leading-relaxed hover:text-brand-blue transition-colors group flex items-start gap-1"
                  aria-label="Ver localização no mapa"
                >
                  <span>Rua Pinhara, 215/102 - Rocha Miranda, Rio de Janeiro - RJ, CEP 21540-650</span>
                  <ExternalLink size={14} className="shrink-0 mt-0.5 text-brand-red group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openPixModal}
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-black py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide min-h-[44px] cursor-pointer shadow-md"
              >
                <Heart size={18} className="fill-current" aria-hidden="true" /> Fazer Doação
              </button>
            </div>
          </address>

        </div>

        {/* Rodapé e Redes Sociais */}
        <footer className="border-t border-border-default pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-text-tertiary gap-4">
          <div>© {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. CNPJ: 02.916.982/0001-91</div>
          <nav className="flex gap-4 items-center font-bold" aria-label="Redes Sociais e Políticas">
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary text-brand-red">Instagram</a>
            <a href="https://www.facebook.com/ACADIMRJ/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary text-brand-red">Facebook</a>
            <Link href="/distrofias" className="hover:text-text-primary">Enciclopédia de Distrofias</Link>
          </nav>
        </footer>

      </div>
    </section>
  );
};
