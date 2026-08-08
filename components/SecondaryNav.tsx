'use client';

import React from 'react';
import Link from 'next/link';

export const SecondaryNav: React.FC = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Conhecendo as distrofias', href: '/distrofias' },
    { label: 'Tipos de distrofia', href: '/distrofias' },
    { label: 'Cuidado e qualidade de vida', href: '/#sobre' },
    { label: 'Conte conosco', href: '/#contato' },
    { label: 'Blog', href: '/noticias' }
  ];

  return (
    <nav aria-label="Navegação secundária" className="bg-[#8ad6d2] py-4 overflow-x-auto border-t-4 border-[#0066CC]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center gap-6 md:gap-10 min-w-max">
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-display text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap transition-colors min-h-[44px] flex items-center ${
                i === 1 ? 'text-[#0B132B] underline decoration-2' : 'text-[#0B132B]/80 hover:text-[#0B132B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
