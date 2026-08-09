'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Send, Check, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { usePix } from '@/context/PixContext';
import { SectionBadge } from './SectionBadge';

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { openPixModal } = usePix();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    setErrorMsg('');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
    }, 5000);
  };

  const whatsappUrl = "https://wa.me/5521994412104?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20ajuda%20e%20informa%C3%A7%C3%B5es%20sobre%20a%20ACADIM.";
  const mapsUrl = "https://maps.google.com/?q=Rua+Pinhara,+215,+Bento+Ribeiro,+Rio+de+Janeiro+-+RJ,+21540-650";

  return (
    <section id="contato" className="bg-gradient-to-b from-surface-subtle via-surface-default to-surface-subtle text-text-primary py-20 border-t border-border-default relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <SectionBadge icon={MessageSquare} text="Canais de Atendimento & Contato" variant="red" />

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary leading-tight">
            Entre em contato e construa esse futuro conosco.
          </h2>

          <p className="text-base text-text-secondary leading-relaxed font-normal">
            Nossa equipe no Rio de Janeiro está pronta para acolher sua família, prestar orientações e responder dúvidas sobre nossas atividades.
          </p>
        </header>

        {/* Bloco Central: Newsletter & Contatos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Newsletter Form (Sem Backend — Protótipo de Interface) */}
          <div className="lg:col-span-7 bg-surface-subtle p-7 rounded-2xl border border-border-subtle space-y-4">
            <h3 className="text-xl font-extrabold text-text-primary">Inscreva-se em nosso boletim informativo</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-medium">
              Receba informes sobre avanços científicos em distrofias musculares, direitos garantidos no SUS e datas de simpósios presenciais e virtuais no RJ.
            </p>
            
            {sent ? (
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-brand-blue font-bold text-xs sm:text-sm flex items-start gap-2.5">
                <Check size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
                <span>Recebemos seu endereço para esta demonstração. A inscrição efetiva no boletim estará disponível em breve.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="newsletter-email" className="sr-only">Endereço de E-mail para Boletim</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-invalid={Boolean(errorMsg)}
                    aria-describedby={errorMsg ? "newsletter-error" : undefined}
                    placeholder="seu.email@exemplo.com.br"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    className="w-full bg-surface-default border border-border-default px-4 py-3 rounded-xl text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red-hover text-white font-black text-sm px-6 py-3 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 uppercase tracking-wide min-h-[44px] cursor-pointer"
                  >
                    <Send size={16} aria-hidden="true" /> Inscrever
                  </button>
                </div>
                {errorMsg && (
                  <p id="newsletter-error" className="text-xs text-red-600 font-bold flex items-center gap-1" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </p>
                )}
                <p className="text-[11px] text-text-tertiary italic">
                  * Formulário de demonstração da interface. Não armazenamos e-mails e o canal oficial de envio será ativado pela instituição.
                </p>
              </form>
            )}
          </div>

          {/* Dados de Contato Direto */}
          <address className="lg:col-span-5 bg-surface-subtle p-7 rounded-2xl border border-border-subtle space-y-4 not-italic text-sm">
            <h3 className="text-xl font-extrabold text-text-primary mb-2">Canais Oficiais</h3>
            
            <div className="flex items-center gap-3 text-text-secondary">
              <Mail size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <a href="mailto:acadim.rj@gmail.com" className="hover:text-brand-blue transition-colors font-medium">acadim.rj@gmail.com</a>
            </div>

            <div className="flex items-start gap-3 text-text-secondary">
              <Phone size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex flex-col font-medium gap-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors flex items-center gap-1.5 text-brand-red font-bold"
                  aria-label="Falar com a ACADIM pelo WhatsApp (abre em nova janela)"
                >
                  <span>(21) 99441-2104 — WhatsApp (Pedir Ajuda)</span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
                <a href="tel:+552125025766" className="hover:text-brand-blue transition-colors text-xs text-text-tertiary">(21) 2502-5766 (Fixo)</a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-text-secondary">
              <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium leading-relaxed hover:text-brand-blue transition-colors group flex items-start gap-1"
                aria-label="Ver localização no mapa"
              >
                <span>Rua Pinhara, 215/102 - Rocha Miranda, Rio de Janeiro - RJ, CEP 21540-650</span>
                <ExternalLink size={14} className="shrink-0 mt-1 text-brand-red group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={openPixModal}
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-black py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide min-h-[44px] cursor-pointer"
              >
                <Heart size={16} className="fill-current" aria-hidden="true" /> Fazer doação agora
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
