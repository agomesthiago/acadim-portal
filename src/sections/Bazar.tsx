import { motion } from 'framer-motion';
import { Shirt, Home, Footprints, ShoppingBag } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { BazarCategory } from '../lib/data';

const iconMap = { shirt: Shirt, home: Home, footprints: Footprints } as const;

export function Bazar({ items }: { items: BazarCategory[] }) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-1.5 rounded-full text-xs font-bold text-[#E31B23] uppercase tracking-wider mb-3">
              <ShoppingBag className="w-4 h-4" />
              Bazar Solidário
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a]">
              Bazar <span className="text-[#E31B23]">Solidário</span>
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Todo o valor arrecadado no nosso bazar é revertido diretamente para o
              atendimento às famílias. Você também pode doar peças em bom estado.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <motion.a
                  href={cat.href}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0066CC] mb-5 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0f172a] mb-5 leading-snug">
                    {cat.title}
                  </h3>
                  <span className="mt-auto bg-[#E31B23] text-white font-bold uppercase text-xs tracking-widest px-6 py-2.5 rounded-full group-hover:bg-[#b91c1c] transition-colors">
                    {cat.cta}
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
