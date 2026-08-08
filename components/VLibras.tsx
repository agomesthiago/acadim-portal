'use client';

import React, { useEffect } from 'react';

export const VLibras: React.FC = () => {
  useEffect(() => {
    // Carrega o script oficial do VLibras (Governo Federal / SERPRO)
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      // @ts-expect-error - VLibras é injetado globalmente pelo script
      if (window.VLibras) {
        // @ts-expect-error - inicialização do widget oficial
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup caso desmonte
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="enabled">
      <div className="active" />
      <div className="vw-plugin-wrapper">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
};
