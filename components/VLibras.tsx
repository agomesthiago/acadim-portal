'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VLibras: {
      Widget: new (url?: string) => void;
    };
  }
}

export const VLibras: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initVLibras = () => {
    if (typeof window !== 'undefined' && window.VLibras) {
      try {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      } catch (err) {
        console.warn('[VLibras Init Warning]:', err);
      }
    }
  };

  useEffect(() => {
    if (mounted && typeof window !== 'undefined' && window.VLibras) {
      initVLibras();
    }
  }, [mounted]);

  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initVLibras}
      />

      {/* Ajuste de Z-Index e Posição do Botão Flutuante do VLibras */}
      <style jsx global>{`
        [vw] {
          z-index: 99999 !important;
        }
        [vw] [vw-access-button] {
          z-index: 99999 !important;
        }
        @media (max-width: 768px) {
          [vw] [vw-access-button] {
            bottom: 85px !important;
            right: 16px !important;
            transform: scale(0.85);
          }
          [vw] [vw-plugin-wrapper] {
            bottom: 85px !important;
          }
        }
      `}</style>

      {/* Container Oficial do Widget VLibras */}
      <div {...{ vw: 'true' }} className="enabled">
        <div {...{ 'vw-access-button': 'true' }} className="active" />
        <div {...{ 'vw-plugin-wrapper': 'true' }}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </>
  );
};
