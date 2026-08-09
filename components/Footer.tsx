'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Heart, MapPin, ExternalLink } from 'lucide-react';
import { usePix } from '@/context/PixContext';

const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const FacebookIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
);
const YoutubeIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const Footer: React.FC = () => {
  const { openPixModal } = usePix();
  const whatsappUrl = "https://wa.me/5521994412104?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20ajuda%20e%20informa%C3%A7%C3%B5es%20sobre%20a%20ACADIM.";
  const mapsUrl = "https://maps.google.com/?q=Rua+Pinhara,+215,+Bento+Ribeiro,+Rio+de+Janeiro+-+RJ,+21540-650";

  return (
    <footer className="bg-surface-inverse text-white border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1: Institucional */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group text-left min-h-[44px]">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <Image src="/logo.svg" alt="Logo ACADIM" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tight leading-none">
                  ACA<span className="text-brand-red">DIM</span>
                </span>
                <span className="text-[10px] text-slate-300 font-semibold tracking-wider uppercase mt-0.5">
                  Distrofia Muscular RJ
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Associação Carioca de Distrofia Muscular. Há 28 anos oferecendo acolhimento, orientação em saúde e defesa de direitos no Rio de Janeiro.
            </p>
            <div className="pt-2">
              <Link href="/redacao" className="text-xs font-bold text-slate-300 hover:text-white underline">
                Política Editorial & Transparência
              </Link>
            </div>
          </div>

          {/* Coluna 2: Conhecimento */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Conhecimento</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/distrofias" className="hover:text-white transition-colors">Enciclopédia de Distrofias</Link></li>
              <li><Link href="/distrofias/duchenne" className="hover:text-white transition-colors">Distrofia Muscular de Duchenne (DMD)</Link></li>
              <li><Link href="/distrofias/becker" className="hover:text-white transition-colors">Distrofia Muscular de Becker (DMB)</Link></li>
              <li><Link href="/distrofias/lgmd-r1-calpainopatia" className="hover:text-white transition-colors">Distrofia das Cinturas (LGMD-R1)</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition-colors">Notícias & Informação em Saúde</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Perguntas Frequentes (FAQ)</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Participação */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Participação</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#sobre" className="hover:text-white transition-colors">Sobre a ACADIM</Link></li>
              <li><Link href="/#servicos" className="hover:text-white transition-colors">Serviços Institucionais</Link></li>
              <li><Link href="/#mascotes" className="hover:text-white transition-colors">Mascotes Clara e Pedro</Link></li>
              <li><Link href="/#impacto" className="hover:text-white transition-colors">Impacto Social & Transparência</Link></li>
              <li><Link href="/#bazar" className="hover:text-white transition-colors">Bazar Solidário</Link></li>
              <li>
                <button onClick={openPixModal} className="text-brand-red font-bold hover:underline text-left cursor-pointer">
                  Como Doar via PIX
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Redes */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Contato Oficial</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-4">
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-brand-red shrink-0" />
                <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @acadimrj
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 font-bold text-brand-red"
                  aria-label="Falar com a ACADIM pelo WhatsApp (abre em nova janela)"
                >
                  <span>WhatsApp: (21) 99441-2104</span>
                  <ExternalLink size={10} className="shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:acadim.rj@gmail.com" className="hover:text-white">acadim.rj@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium flex items-center gap-1"
                  aria-label="Ver localização no mapa"
                >
                  <span>Rocha Miranda / Bento Ribeiro — RJ</span>
                  <ExternalLink size={10} className="shrink-0" />
                </a>
              </li>
            </ul>

            <button
              onClick={openPixModal}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-black uppercase tracking-wider py-2.5 px-4 rounded-xl shadow transition-colors min-h-[44px] cursor-pointer"
            >
              <Heart size={16} className="fill-current" />
              <span>Apoiar com Doação</span>
            </button>
          </div>

        </div>

        {/* Faixa Social */}
        <div className="bg-slate-900 rounded-2xl p-6 text-center border border-white/10">
          <p className="font-display font-bold text-slate-300 text-xs uppercase tracking-wider mb-4">
            Siga a ACADIM nas Redes Sociais
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.facebook.com/ACADIMRJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <FacebookIcon className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
              <YoutubeIcon className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-4">
          © {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. CNPJ: 02.916.982/0001-91. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
