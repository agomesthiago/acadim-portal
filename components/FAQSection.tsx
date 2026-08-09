'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'O que é a ACADIM?',
      a: 'A Associação Carioca de Distrofia Muscular (ACADIM) é uma organização sem fins lucrativos que há 28 anos oferece acolhimento, orientação e defesa de direitos para pessoas com distrofia muscular e doenças neuromusculares no Estado do Rio de Janeiro.',
    },
    {
      q: 'Como posso me cadastrar para receber atendimento?',
      a: 'Você pode se cadastrar diretamente enviando uma mensagem pelo nosso formulário de contato abaixo ou via WhatsApp. Nossa equipe técnica agendará uma acolhida inicial.',
    },
    {
      q: 'A ACADIM cobra mensalidade ou taxa de associação?',
      a: 'Não. Todo o acolhimento e orientação prestados às pessoas com distrofia muscular e suas famílias são totalmente gratuitos.',
    },
    {
      q: 'Como faço para doar ou investir na associação?',
      a: 'Você pode realizar doações via Pix, cartão de crédito, doação de produtos para o nosso Bazar Online ou firmando parcerias institucionais empresariais.',
    },
    {
      q: 'Onde fica localizada a ACADIM?',
      a: 'Nossa sede fica no Rio de Janeiro (Rocha Miranda / Bento Ribeiro), mas prestamos orientação remota para famílias de todo o estado.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div>
            <SectionBadge icon={HelpCircle} text="Tire suas Dúvidas" variant="blue" className="mb-3" />
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
              Perguntas <span className="text-[#E31B23]">Frequentes</span>
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-left p-6 font-display font-bold text-lg text-[#0B132B] flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors min-h-[44px]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0066CC] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="p-6 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-fadeIn"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
