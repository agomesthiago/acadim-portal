import React from 'react';
import { HeroPix } from '../components/HeroPix';
import { AboutUs } from '../components/AboutUs';
import { MascotsSection } from '../components/MascotsSection';
import { MissionVisionValues } from '../components/MissionVisionValues';
import { ServicesSection } from '../components/ServicesSection';
import { DualTargetImpact } from '../components/DualTargetImpact';
import { BazarSection } from '../components/BazarSection';
import { BlogSection } from '../components/BlogSection';
import { FAQSection } from '../components/FAQSection';
import { DonationCTA } from '../components/DonationCTA';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-[#0066CC] selection:text-white">
      <Navbar />

      <main>
        <HeroPix />
        <AboutUs />
        <MascotsSection />
        <MissionVisionValues />
        <ServicesSection />
        <DualTargetImpact />
        <BazarSection />
        <BlogSection />
        <FAQSection />
        <DonationCTA />
      </main>

      <Footer />
    </div>
  );
}
