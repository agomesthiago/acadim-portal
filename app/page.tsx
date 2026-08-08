import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { NavigationDots } from '../components/NavigationDots';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { MascotsSection } from '../components/MascotsSection';
import { ServicesSection } from '../components/ServicesSection';
import { DualTargetImpact } from '../components/DualTargetImpact';
import { BazarSection } from '../components/BazarSection';
import { NewsSection } from '../components/NewsSection';
import { SecondaryNav } from '../components/SecondaryNav';
import { FAQSection } from '../components/FAQSection';
import { DonationCTA } from '../components/DonationCTA';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default async function Home() {
  // Schema.org dados estruturados para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'ACADIM — Associação Carioca de Distrofia Muscular',
    alternateName: 'ACADIM RJ',
    url: 'https://acadim.org.br',
    logo: 'https://acadim.org.br/mascotes.png',
    description: 'Acolhimento, informação qualificada e defesa de direitos das pessoas com Distrofia Muscular e doenças neuromusculares no Rio de Janeiro.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Pinhara, 215/102',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '21540-650',
      addressCountry: 'BR',
    },
    telephone: '+55-21-99441-2104',
    sameAs: [
      'https://www.instagram.com/acadimrj/',
      'https://www.facebook.com/ACADIMRJ/',
    ],
  };

  return (
    <div className="relative min-h-screen bg-surface-inverse">
      {/* Dados Estruturados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Fixo */}
      <HeaderNav />

      {/* Indicadores Laterais (Dots) */}
      <NavigationDots />

      {/* Container Principal */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <MascotsSection />
        <ServicesSection />
        <DualTargetImpact />
        <BazarSection />
        <NewsSection />
        <SecondaryNav />
        <FAQSection />
        <DonationCTA />
        <ContactSection />
      </main>

      {/* Rodapé Completo */}
      <Footer />
    </div>
  );
}
