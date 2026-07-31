import { Reveal } from '../components/Reveal';
import type { Partner } from '../lib/data';

export function Partners({ partners }: { partners: Partner[] }) {
  if (!partners || partners.length === 0) return null;
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Parceiros que caminham com a gente
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="font-display font-bold text-slate-400 hover:text-[#0066CC] text-sm sm:text-base transition-colors px-4 py-2"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ) : (
                p.name
              )}
            </div>
          ))}
        </div>
        <Reveal className="text-center mt-10">
          <a
            href="#contato"
            className="text-sm font-semibold text-[#0066CC] hover:text-[#004499] inline-flex items-center gap-1"
          >
            Quero ser parceiro da ACADIM →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
