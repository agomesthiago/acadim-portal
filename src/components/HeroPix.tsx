import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Copy, CheckCircle2 } from 'lucide-react';
import { EASE_OUT, Reveal } from './Animations';

export function HeroPix() {
  const [copied, setCopied] = useState(false);
  const pixKey = "00.000.000/0001-00";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#0B132B] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] rounded-full bg-[#0066CC]/25 blur-[140px] animate-float-slow" />
      <div className="absolute top-20 -right-20 w-[550px] h-[550px] rounded-full bg-[#E31B23]/20 blur-[150px] animate-float-reverse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B132B]/50 to-[#0B132B]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 border border-white/20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#E31B23] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Há 28 anos mudando vidas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.98] tracking-tight"
            >
              Ajude a <span className="text-gradient-blue">ACADIM</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/90">
                Sua doação faz a diferença agora.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              Apoie centenas de famílias que convivem com a distrofia muscular. A solidariedade é o caminho para garantirmos acolhimento, informação e qualidade de vida.
            </motion.p>
          </div>

          {/* Right Donation Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
              className="relative w-full max-w-md"
            >
              {/* Glow back */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E31B23] via-[#0066CC] to-[#38bdf8] rounded-[2rem] blur-2xl opacity-50" />

              {/* Card Container */}
              <div className="relative rounded-[2rem] bg-white p-8 shadow-2xl border-[3px] border-white text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#E31B23]" fill="currentColor" />
                </div>
                
                <h3 className="font-display font-black text-3xl text-[#0B132B] mb-2">Doe pelo PIX</h3>
                <p className="text-sm text-slate-600 mb-6">Escaneie o QR Code ou copie a chave abaixo.</p>
                
                <div className="bg-slate-100 p-4 rounded-xl flex items-center justify-center mb-6">
                  {/* Mock QR Code for now */}
                  <div className="w-40 h-40 border-4 border-[#0B132B] rounded-lg p-2 flex items-center justify-center bg-white shadow-inner">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=00000000000100" alt="QR Code Pix" className="opacity-90" />
                  </div>
                </div>

                <div className="text-left mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chave PIX (CNPJ)</span>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between bg-slate-100 hover:bg-blue-50 border-2 border-slate-200 hover:border-[#0066CC] transition-all rounded-xl p-4 group"
                >
                  <span className="font-mono font-bold text-lg text-[#0B132B]">{pixKey}</span>
                  {copied ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <Copy className="w-6 h-6 text-slate-400 group-hover:text-[#0066CC]" />
                  )}
                </button>
                {copied && (
                  <p className="text-green-600 text-xs font-bold mt-2">Chave copiada com sucesso!</p>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
