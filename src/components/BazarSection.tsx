import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Reveal, SCALE_SPRING } from './Animations';
import { motion } from 'framer-motion';

export function BazarSection() {
  return (
    <section className="py-24 bg-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-100/50 -skew-x-12 translate-x-20 hidden lg:block" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-yellow-200 text-yellow-800 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-2">
                <ShoppingBag className="w-4 h-4" />
                Apoie Comprando
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B132B]">
                Bazar Solidário
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-slate-700 text-lg leading-relaxed">
                Nosso bazar é uma das principais fontes de arrecadação para manter as atividades da ACADIM. 
                Toda a renda é revertida para a compra de cadeiras de rodas, medicamentos, suplementos alimentares e 
                manutenção dos nossos projetos sociais.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-200 space-y-4">
                <h4 className="font-bold text-[#0B132B]">Como funciona?</h4>
                <p className="text-sm text-slate-600">
                  Recebemos doações de roupas, calçados, brinquedos e utilidades domésticas em bom estado. 
                  Esses itens são vendidos a preços acessíveis para a comunidade.
                </p>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0B132B] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-slate-800 transition-colors"
                  >
                    Quero Doar Itens
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-yellow-900 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-yellow-300 transition-colors"
                  >
                    Onde Comprar?
                  </motion.button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-yellow-300 to-yellow-100 shadow-2xl p-8 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="text-center space-y-4">
                   <ShoppingBag className="w-24 h-24 text-yellow-600 mx-auto opacity-50" />
                   <h3 className="font-display font-black text-2xl text-yellow-900">Moda Sustentável</h3>
                   <p className="text-yellow-800/80 font-medium">Fazer o bem veste muito bem.</p>
                 </div>
              </div>
              
              {/* Decorative tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl font-bold text-[#E31B23] rotate-12"
              >
                100% Revertido
              </motion.div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
