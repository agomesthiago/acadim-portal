'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export const ShareButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors min-h-[44px]"
      aria-label="Compartilhar matéria"
    >
      {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
      <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
    </button>
  );
};
