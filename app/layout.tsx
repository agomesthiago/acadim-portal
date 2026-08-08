import { Figtree } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { PixProvider } from '@/context/PixContext';
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar';
import { SkipLink } from '@/components/SkipLink';
import { VLibras } from '@/components/VLibras';

const figtree = Figtree({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acadim.org.br'),
  title: 'ACADIM | Associação Carioca de Distrofia Muscular',
  description: 'Acolhimento, orientação médica, defesa de direitos e apoio às famílias afetadas por distrofia muscular (Duchenne, Becker, etc.) no Rio de Janeiro.',
  keywords: ['distrofia muscular', 'duchenne', 'becker', 'ONG Rio de Janeiro', 'ACADIM', 'doença rara', 'apoio a famílias'],
  openGraph: {
    title: 'ACADIM | Acolhimento e Apoio no Rio de Janeiro',
    description: 'Transformando a vida das famílias que convivem com distrofia muscular. Apoiando a pesquisa, direitos no SUS e a inclusão social.',
    url: 'https://acadim.org.br',
    siteName: 'ACADIM',
    images: [
      {
        url: '/assets/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Famílias ACADIM',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACADIM | Associação Carioca de Distrofia Muscular',
    description: 'Acolhimento e apoio às famílias com distrofia muscular no Rio de Janeiro.',
    images: ['/assets/hero-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${figtree.variable}`}>
      <body className={`${figtree.className} antialiased`}>
        <AccessibilityProvider>
          <PixProvider>
            {/* Atalho de Teclado Ir para Conteúdo */}
            <SkipLink />

            {/* Conteúdo da Aplicação */}
            {children}

            {/* Ferramentas de Acessibilidade Flutuantes (Alto Contraste, Fontes, Modos) */}
            <AccessibilityToolbar />

            {/* Widget Oficial de LIBRAS (Governo Federal / VLibras) */}
            <VLibras />
          </PixProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
