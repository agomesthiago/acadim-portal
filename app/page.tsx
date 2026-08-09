import React from 'react';
import { NavigationDots } from '../components/NavigationDots';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { MascotsSection } from '../components/MascotsSection';
import { ServicesSection } from '../components/ServicesSection';
import { DualTargetImpact } from '../components/DualTargetImpact';
import { BazarSection } from '../components/BazarSection';
import { NewsSection } from '../components/NewsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { InstagramSection } from '../components/InstagramSection';
import { DonationCTA } from '../components/DonationCTA';
import { ScrollReveal } from '../components/ScrollReveal';

import { getAllNewsAsync, sortNewsForHero } from '@/lib/news-data';

export const revalidate = 60;

export default async function Home() {
  const latestNews = await getAllNewsAsync();
  const heroNews = sortNewsForHero(latestNews);

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
    <div className="relative bg-surface-inverse">
      {/* Dados Estruturados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Indicadores Laterais (Dots) */}
      <NavigationDots />

      {/* Seções da Home */}
      <HeroSection latestNews={heroNews} />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><MascotsSection /></ScrollReveal>
      <ScrollReveal><ServicesSection /></ScrollReveal>
      <ScrollReveal><DualTargetImpact /></ScrollReveal>
      <ScrollReveal><BazarSection /></ScrollReveal>
      <ScrollReveal><NewsSection latestNews={latestNews} /></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
      <ScrollReveal><InstagramSection /></ScrollReveal>
      <ScrollReveal><DonationCTA /></ScrollReveal>
    </div>
  );
}
