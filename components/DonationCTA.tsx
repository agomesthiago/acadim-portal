'use client';

import React, { useState } from 'react';
import { Heart, Check, Copy } from 'lucide-react';

export const DonationCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "02.916.982/0001-91";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="doar" className="py-24 lg:py-32 bg-gradient-to-br from-[#0B132B] via-[#004499] to-[#0B132B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-[#E31B23]/20 via-transparent to-transparent opacity-60" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#E31B23] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg mb-4">
            <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
            Fortaleça esta Causa
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white leading-tight">
            Sua ajuda transforma <span className="text-gradient-red">vidas reais</span>.
          </h2>
        </div>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          Há 28 anos, a ACADIM caminha ao lado de centenas de famílias. Contribua com qualquer valor e ajude a manter nossos projetos ativos.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-xl mx-auto shadow-2xl space-y-6">
          <p className="text-sm font-bold text-sky-200 uppercase tracking-widest">
            Chave Pix de Doação Oficial
          </p>
          <div className="bg-white text-[#0B132B] p-4 rounded-2xl font-mono text-lg sm:text-xl font-black tracking-wider flex items-center justify-between border-2 border-[#0066CC]">
            <span>CNPJ: {pixKey}</span>
            <button
              onClick={handleCopy}
              className="bg-[#0066CC] hover:bg-[#004499] text-white text-xs px-4 py-2 rounded-lg font-sans font-bold transition-colors flex items-center gap-1.5 min-h-[44px]"
              aria-label="Copiar chave PIX"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-slate-300">
            Banco Oficial: Itaú • Conta Corrente da Associação Carioca de Distrofia Muscular
          </p>
        </div>
      </div>
    </section>
  );
};
