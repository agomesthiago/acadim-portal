import React from 'react';
import { Heart } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';

export function DualTargetImpact() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B] mb-6">
              Nosso Impacto
            </h2>
            <p className="text-slate-600 text-lg">
              Trabalhamos em duas frentes fundamentais para garantir um cuidado completo e uma sociedade mais inclusiva.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Alvo 1: Famílias */}
          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={SCALE_SPRING}
              className="bg-gradient-to-br from-[#0B132B] to-[#1a2b5e] rounded-[2rem] p-8 sm:p-12 text-white shadow-xl h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066CC]/20 rounded-full blur-3xl -mr-20 -mt-20" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0066CC] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-black text-3xl mb-4">Para as Famílias</h3>
                
                <ul className="space-y-4">
                  {[
                    "Acolhimento emocional desde o diagnóstico",
                    "Rede de apoio e troca de experiências",
                    "Orientação sobre direitos e acesso à saúde",
                    "Assistência prática no dia a dia"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066CC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>

          {/* Alvo 2: Sociedade */}
          <Reveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={SCALE_SPRING}
              className="bg-gradient-to-br from-[#E31B23] to-[#b3151b] rounded-[2rem] p-8 sm:p-12 text-white shadow-xl h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-black text-3xl mb-4">Para a Sociedade</h3>
                
                <ul className="space-y-4">
                  {[
                    "Conscientização sobre Distrofia Muscular",
                    "Luta por políticas públicas inclusivas",
                    "Combate ao capacitismo estrutural",
                    "Promoção da acessibilidade universal"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
