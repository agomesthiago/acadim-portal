import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const KEY = 'acadim_cookie_consent';

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ok = typeof window !== 'undefined' && window.localStorage.getItem(KEY) === 'true';
    setOpen(!ok);
  }, []);

  const accept = () => {
    window.localStorage.setItem(KEY, 'true');
    setOpen(false);
  };
  const reject = () => {
    window.localStorage.setItem(KEY, 'false');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl">
      <div className="bg-white shadow-2xl border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 text-sm text-slate-700 leading-relaxed">
          <p>
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site, em
            conformidade com a LGPD. Ao continuar navegando, você aceita nossa política.
          </p>
        </div>
        <div className="flex gap-2 items-center self-stretch sm:self-auto">
          <button
            onClick={reject}
            className="text-slate-500 hover:text-slate-800 text-xs font-semibold px-3 py-2"
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="bg-[#0066CC] hover:bg-[#004499] text-white text-xs font-bold px-4 py-2 rounded-full"
          >
            Aceitar cookies
          </button>
          <button
            onClick={reject}
            aria-label="Fechar aviso de cookies"
            className="text-slate-400 hover:text-slate-600 p-1 sm:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
