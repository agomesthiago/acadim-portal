'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
  }
}

export const VLibras: React.FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    // Check if script already exists to avoid duplicates during HMR or StrictMode
    const existingScript = document.querySelector('script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]');
    
    if (existingScript) {
      // Script already loaded, just initialize if not already done
      if (window.VLibras) {
        // The widget usually creates elements inside the wrapper
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      initialized.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);
    initialized.current = true;
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          [vw] [vw-access-button] {
            bottom: 80px !important;
            right: 16px !important;
            transform: scale(0.85);
          }
          [vw] [vw-plugin-wrapper] {
            bottom: 80px !important;
          }
        }
      `}</style>
      {/* @ts-expect-error VLibras custom attributes */}
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active" />
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </>
  );
};
