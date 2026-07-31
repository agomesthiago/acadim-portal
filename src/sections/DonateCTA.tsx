import { useState } from 'react';
import { Heart, Check, Copy, CreditCard, FileText, Gift, Receipt } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { DonateInfo } from '../lib/data';

const methodIcons = {
  PIX: Heart,
  'Transferência bancária': CreditCard,
  'Nota Fiscal Carioca': Receipt,
  'Objetos para o bazar': Gift,
} as const;

export function DonateCTA({ info }: { info: DonateInfo }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(info.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.warn('Clipboard API indisponível:', e);
    }
  };

  return (
    <section
      id="doar"
      className="py-20 lg:py-28 bg-gradient-to-br from-[#0066CC] via-[#004499] to-[#0B132B] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E31B23]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-[#E31B23] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            <Heart className="w-4 h-4" fill="currentColor" />
            {info.eyebrow}
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white leading-tight mt-4">
            {info.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-blue-100 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {info.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 max-w-xl mx-auto shadow-2xl space-y-5 text-left">
            <p className="text-sm font-bold text-sky-200 uppercase tracking-widest text-center">
              {info.pixLabel}
            </p>
            <div className="bg-white text-[#0f172a] p-4 rounded-2xl flex items-center justify-between gap-3 border-2 border-[#E31B23]">
              <span className="font-mono text-base sm:text-xl font-black tracking-wider break-all">
                {info.pixKey}
              </span>
              <button
                onClick={copy}
                aria-label={copied ? 'Chave copiada' : 'Copiar chave PIX'}
                className={`flex items-center gap-1.5 text-white text-xs px-3 py-2 rounded-lg font-bold transition-colors flex-shrink-0 ${
                  copied ? 'bg-green-600' : 'bg-[#0066CC] hover:bg-[#004499]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copiar
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-blue-100 text-center">{info.bank}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
            {info.methods.map((m) => {
              const Icon =
                methodIcons[m.label as keyof typeof methodIcons] ?? FileText;
              return (
                <div
                  key={m.label}
                  className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/15 text-left hover:bg-white/15 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold text-white">{m.label}</p>
                  <p className="text-[11px] text-blue-100 mt-1 leading-snug">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
