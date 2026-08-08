'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  onOpenPixModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPixModal }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
    }, 3500);
  };

  return (
    <section id="contato" className="bg-surface-inverse text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-brand-red inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Canais de Atendimento & Contato
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Entre em contato e construa esse futuro conosco.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Nossa equipe no Rio de Janeiro está pronta para acolher sua família, prestar orientações e responder dúvidas sobre nossas atividades.
          </p>
        </header>

        {/* Bloco Central: Newsletter & Contatos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Newsletter Form */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-7 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xl font-extrabold text-white">Inscreva-se em nosso boletim informativo</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Receba informes sobre avanços científicos em distrofias musculares, direitos garantidos no SUS e datas de simpósios presenciais e virtuais no RJ.
            </p>
            
            {sent ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-xl text-emerald-300 font-bold text-sm flex items-center gap-2">
                <Check size={18} aria-hidden="true" />
                <span>E-mail cadastrado com sucesso na lista da ACADIM!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <label htmlFor="newsletter-email" className="sr-only">Endereço de E-mail</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="seu.email@exemplo.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-border-focus"
                />
                <button
                  type="submit"
                  className="bg-brand-red hover:bg-brand-red-hover text-white font-black text-sm px-6 py-3 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 uppercase tracking-wide min-h-[44px]"
                >
                  <Send size={16} aria-hidden="true" /> Inscrever
                </button>
              </form>
            )}
          </div>

          {/* Dados de Contato Direto */}
          <address className="lg:col-span-5 bg-white/5 backdrop-blur-md p-7 rounded-2xl border border-white/10 space-y-4 not-italic text-sm">
            <h3 className="text-xl font-extrabold text-white mb-2">Canais Oficiais</h3>
            
            <div className="flex items-center gap-3 text-slate-200">
              <Mail size={18} className="text-brand-red shrink-0" aria-hidden="true" />
              <a href="mailto:acadim.rj@gmail.com" className="hover:text-white transition-colors font-medium">acadim.rj@gmail.com</a>
            </div>

            <div className="flex items-start gap-3 text-slate-200">
              <Phone size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex flex-col font-medium">
                <a href="tel:+5521994412104" className="hover:text-white transition-colors">(21) 99441-2104 (WhatsApp)</a>
                <a href="tel:+552125025766" className="hover:text-white transition-colors">(21) 2502-5766</a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-200">
              <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" aria-hidden="true" />
              <span className="font-medium leading-relaxed">RUA PINHARA, 215/102 - ROCHA MIRANDA, RIO DE JANEIRO - RJ, CEP 21540-650</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPixModal}
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-black py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide min-h-[44px]"
              >
                <Heart size={16} className="fill-current" aria-hidden="true" /> Fazer doação agora
              </button>
            </div>
          </address>

        </div>

        {/* Rodapé e Redes Sociais */}
        <footer className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>© {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. CNPJ: 02.916.982/0001-91</div>
          <nav className="flex gap-4 items-center font-bold" aria-label="Redes Sociais e Políticas">
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-brand-red">Instagram</a>
            <a href="https://www.facebook.com/ACADIMRJ/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-brand-red">Facebook</a>
            <a href="/distrofias" className="hover:text-white">Tipos de Distrofia</a>
          </nav>
        </footer>

      </div>
    </section>
  );
};
