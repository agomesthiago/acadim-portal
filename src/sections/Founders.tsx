import { UserRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import type { Founder } from '../lib/data';

export function Founders({ founders }: { founders: Founder[] }) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-red-100 text-[#E31B23] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                Nossos fundadores
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] tracking-tight mt-3 leading-tight">
                Duas vidas que decidiram que <span className="text-[#E31B23]">ninguém caminha sozinho</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Nossos fundadores são também os rostos do acolhimento na ACADIM.
                Maria Clara e Dr. Fábio representam a combinação de experiência vivida
                e conhecimento técnico que faz da ACADIM uma referência em cuidado
                e defesa de direitos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#E31B23] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Voz de quem vivencia</h4>
                    <p className="text-xs text-slate-600">
                      Maria Clara convive com distrofia muscular e lidera a ACADIM desde a fundação.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Conhecimento a serviço da vida</h4>
                    <p className="text-xs text-slate-600">
                      Dr. Fábio Bolognani traz a expertise médica e o pioneirismo no cuidado às distrofias.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6">
                {founders.map((f, i) => (
                  <motion.div
                    key={f.name}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-white rounded-3xl overflow-hidden border-2 ${
                      f.accent === 'red' ? 'border-red-100' : 'border-blue-100'
                    } shadow-md hover:shadow-xl transition-shadow`}
                  >
                    <div
                      className={`aspect-[4/3] relative flex items-center justify-center ${
                        f.accent === 'red' ? 'bg-red-50' : 'bg-blue-50'
                      }`}
                    >
                      {/* Placeholder até que as fotos reais estejam disponíveis */}
                      <div
                        className={`w-32 h-32 rounded-full flex items-center justify-center shadow-inner ${
                          f.accent === 'red'
                            ? 'bg-white border-4 border-[#E31B23]/30 text-[#E31B23]'
                            : 'bg-white border-4 border-[#0066CC]/30 text-[#0066CC]'
                        }`}
                      >
                        <UserRound className="w-16 h-16" strokeWidth={1.5} />
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-white/80 px-2 py-0.5 rounded-full">
                        Foto oficial em breve
                      </span>
                      {/* Descomente abaixo quando tiver a foto real:
                      <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                      */}
                    </div>
                    <div className="p-6 space-y-2">
                      <div
                        className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          f.accent === 'red'
                            ? 'bg-red-100 text-[#E31B23]'
                            : 'bg-blue-100 text-[#0066CC]'
                        }`}
                      >
                        {i === 0 ? 'Fundadora' : 'Cofundador'}
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#0f172a]">
                        {f.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">{f.role}</p>
                      <p className="text-sm text-slate-600 leading-relaxed pt-1">{f.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
