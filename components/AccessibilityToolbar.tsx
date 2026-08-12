'use client';

import React, { useState } from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { Eye, Sun, ZapOff, ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';

export const AccessibilityToolbar: React.FC = () => {
  const {
    theme,
    fontSize,
    reducedMotion,
    setTheme,
    toggleHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleReducedMotion,
    resetAll,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Barra de Ferramentas de Acessibilidade"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Drawer com Opções */}
      {isOpen && (
        <div
          role="region"
          aria-label="Opções de Acessibilidade e Contraste"
          className="bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-white/20 space-y-4 max-w-xs w-full animate-fade-in text-xs font-semibold"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-black text-sm uppercase tracking-wider text-brand-red flex items-center gap-2">
              <Eye size={16} aria-hidden="true" />
              Acessibilidade
            </span>
            <span className="text-[10px] text-slate-500">Alt+C, Alt++, Alt+R</span>
          </div>

          {/* Temas / Contraste */}
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-500">Modo de Exibição</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all min-h-[44px] ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 border-white font-bold'
                    : 'bg-white/10 text-slate-200 border-white/10 hover:bg-white/20'
                }`}
                aria-label="Ativar Modo Claro Padrão"
              >
                <Sun size={16} className="mb-1" />
                <span>Padrão (Claro)</span>
              </button>

              <button
                onClick={toggleHighContrast}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all min-h-[44px] ${
                  theme === 'high-contrast'
                    ? 'bg-black text-yellow-300 border-yellow-300 font-black ring-2 ring-yellow-300'
                    : 'bg-white/10 text-yellow-300 border-yellow-300/40 hover:bg-white/20'
                }`}
                aria-label="Ativar Modo Alto Contraste AAA (Preto e Amarelo)"
              >
                <Eye size={16} className="mb-1" />
                <span className="text-[10px]">Alto Contraste</span>
              </button>
            </div>
          </div>

          {/* Tamanho da Fonte */}
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase text-slate-500">Tamanho do Texto</span>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseFontSize}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-xl border border-white/10 font-bold min-h-[44px]"
                aria-label="Diminuir tamanho do texto"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className={`px-3 py-2 rounded-xl border text-xs font-bold min-h-[44px] ${
                  fontSize === 'normal' ? 'bg-brand-red text-white border-brand-red' : 'bg-white/10 text-slate-300 border-white/10'
                }`}
                aria-label="Tamanho de texto normal"
              >
                100%
              </button>
              <button
                onClick={increaseFontSize}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-xl border border-white/10 font-bold text-sm min-h-[44px]"
                aria-label="Aumentar tamanho do texto"
              >
                A+
              </button>
            </div>
          </div>

          {/* Reduzir Animações */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <button
              onClick={toggleReducedMotion}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all min-h-[44px] ${
                reducedMotion
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
              aria-label="Alternar redução de movimento e animações"
            >
              <span className="flex items-center gap-2">
                <ZapOff size={14} />
                <span>Reduzir Animações</span>
              </span>
              <span className="text-[10px] font-mono uppercase">{reducedMotion ? 'Ativado' : 'Off'}</span>
            </button>

            {/* BOTÃO DE RESET DOS PADRÕES */}
            <button
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 p-2.5 rounded-xl transition-all font-bold min-h-[44px]"
              aria-label="Restaurar padrões de exibição e acessibilidade"
            >
              <RotateCcw size={14} />
              <span>Restaurar Padrões</span>
            </button>
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-surface-inverse text-white font-black text-xs px-4 py-3 rounded-full shadow-2xl border border-white/20 hover:bg-slate-800 transition-all min-h-[44px] focus:outline-none focus:ring-4 focus:ring-border-focus"
        aria-label="Abrir Menu de Recursos de Acessibilidade"
        aria-expanded={isOpen}
      >
        <Eye size={18} className="text-brand-red" aria-hidden="true" />
        <span>Acessibilidade</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>
    </aside>
  );
};
