'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Copy, Check, Heart, QrCode } from 'lucide-react';

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PixModal: React.FC<PixModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const pixKey = "02.916.982/0001-91";

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Guardar o elemento com foco atual para restaurar ao fechar
    previousFocusRef.current = document.activeElement as HTMLElement;

    // 2. Travar a rolagem da página de fundo (Body Scroll Locking)
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 3. Foco inicial no botão de fechar do modal
    const focusTimeout = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // 4. Fechamento por Tecla Escape e Focus Trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Tab para trás
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab para frente
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup: restaurar scroll do body, remover listeners e devolver o foco
    return () => {
      clearTimeout(focusTimeout);
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(pixKey);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-[1rem] bg-slate-900/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pix-modal-title"
        aria-describedby="pix-modal-description"
        className="relative w-full max-w-[28rem] bg-white rounded-[1.25rem] shadow-2xl overflow-hidden border border-slate-100"
      >
        
        {/* Header do Modal */}
        <div className="bg-surface-inverse p-[1.5rem] text-white text-center relative">
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar modal de doação"
            className="absolute right-[1rem] top-[1rem] text-slate-400 hover:text-white p-[0.25rem] rounded-full hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="inline-flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-brand-red/20 text-brand-red mb-[0.75rem]">
            <Heart size={24} className="fill-current" aria-hidden="true" />
          </div>
          <h3 id="pix-modal-title" className="text-xl font-extrabold">Doe via PIX para a ACADIM</h3>
          <p id="pix-modal-description" className="text-sm text-slate-300 mt-[0.25rem]">Sua contribuição transforma a vida de famílias no RJ</p>
        </div>

        {/* Corpo do Modal */}
        <div className="p-[1.5rem] space-y-[1.25rem]">
          <div className="flex flex-col items-center justify-center p-[1rem] bg-slate-50 rounded-[0.75rem] border border-slate-200">
            <div className="bg-white p-[0.75rem] rounded-[0.5rem] shadow-sm mb-[0.75rem]">
              <QrCode size={130} className="text-brand-blue-dark" aria-hidden="true" />
            </div>
            <span className="text-[0.75rem] text-slate-500 font-medium">Abra o aplicativo do banco e escaneie o código</span>
          </div>

          <div>
            <label htmlFor="pix-key-input" className="block text-[0.75rem] font-bold uppercase tracking-wider text-slate-600 mb-[0.5rem]">
              Chave PIX (CNPJ ACADIM):
            </label>
            <div className="flex items-center gap-[0.5rem]">
              <input 
                id="pix-key-input"
                type="text" 
                readOnly 
                value={pixKey}
                className="w-full bg-slate-100 text-slate-800 font-mono text-[0.875rem] px-[0.75rem] py-[0.625rem] rounded-[0.5rem] border border-slate-200 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                aria-label={copied ? "Chave PIX copiada para a área de transferência" : "Copiar chave PIX"}
                className={`flex items-center gap-[0.375rem] px-[1rem] py-[0.625rem] rounded-[0.5rem] font-bold text-[0.875rem] transition-all shadow-sm min-h-[44px] ${
                  copied 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-brand-red hover:bg-brand-red-hover text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} aria-hidden="true" /> Copiado!
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" /> Copiar
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="text-[0.75rem] text-slate-500 text-center leading-relaxed">
            Razão Social: Associação Carioca de Distrofia Muscular<br />
            Banco Itaú | Chave Pix CNPJ: 02.916.982/0001-91
          </div>
        </div>

      </div>
    </div>
  );
};
