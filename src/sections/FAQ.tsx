import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { FAQItem } from '../lib/data';

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-[#0066CC] text-xs font-black uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">
              Dúvidas frequentes
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] mt-3 leading-tight">
              Perguntas <span className="text-[#E31B23]">frequentes</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const open = openIndex === i;
            const id = `faq-${i}`;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                  <h3>
                    <button
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="w-full text-left p-5 sm:p-6 font-display font-bold text-base sm:text-lg text-[#0f172a] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={open}
                      aria-controls={id}
                      id={`faq-btn-${i}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0066CC] flex-shrink-0 transition-transform ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        id={id}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
