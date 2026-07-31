import { Quote } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { Testimonial } from '../lib/data';

const colorMap = {
  red: { bg: 'bg-red-50', border: 'border-red-200', initials: 'bg-[#E31B23]' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', initials: 'bg-[#0066CC]' },
} as const;

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="text-[#E31B23] text-xs font-black uppercase tracking-widest bg-red-100 px-4 py-1.5 rounded-full">
              Quem caminha conosco
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] mt-4 leading-tight">
              Histórias que <span className="text-[#E31B23]">inspiram</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Relatos de famílias que encontraram na ACADIM um lugar de acolhimento.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`${c.bg} rounded-3xl p-7 border ${c.border} h-full flex flex-col`}>
                  <Quote className="w-8 h-8 text-[#0066CC]/50 mb-4" />
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base flex-1 font-serif italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200/70">
                    <div
                      className={`w-10 h-10 rounded-full ${c.initials} text-white font-bold text-sm flex items-center justify-center flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0f172a]">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
