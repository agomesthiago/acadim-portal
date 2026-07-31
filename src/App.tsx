import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ScrollTop } from './components/ScrollTop';
import { CookieBanner } from './components/CookieBanner';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Founders } from './sections/Founders';
import { Mission } from './sections/Mission';
import { Services } from './sections/Services';
import { ImpactNumbers } from './sections/ImpactNumbers';
import { GetInvolved } from './sections/GetInvolved';
import { Bazar } from './sections/Bazar';
import { Testimonials } from './sections/Testimonials';
import { Partners } from './sections/Partners';
import { Blog } from './sections/Blog';
import { Transparency } from './sections/Transparency';
import { FAQ } from './sections/FAQ';
import { DonateCTA } from './sections/DonateCTA';

import {
  getAbout,
  getBlogPosts,
  getBazar,
  getContact,
  getDonate,
  getFAQ,
  getFounders,
  getHero,
  getImpactNumbers,
  getMission,
  getPartners,
  getServices,
  getTestimonials,
  getTracks,
  getTransparency,
  isSupabaseReady,
} from './lib/supabase';

import type {
  About,
  BlogPost,
  BazarCategory,
  ContactInfo,
  DonateInfo,
  FAQItem,
  Founder,
  Hero as HeroData,
  ImpactNumber,
  MissionPillar,
  Partner,
  Service,
  Testimonial,
  Track,
  TransparencyInfo,
} from './lib/data';
import {
  defaultAbout,
  defaultBazar,
  defaultContact,
  defaultDonate,
  defaultFAQ,
  defaultFounders,
  defaultHero,
  defaultImpactNumbers,
  defaultMission,
  defaultPartners,
  defaultPosts,
  defaultServices,
  defaultTestimonials,
  defaultTracks,
  defaultTransparency,
} from './lib/data';

export default function App() {
  const [data, setData] = useState({
    hero: defaultHero as HeroData,
    about: defaultAbout as About,
    founders: defaultFounders as Founder[],
    mission: defaultMission as MissionPillar[],
    services: defaultServices as Service[],
    impact: defaultImpactNumbers as ImpactNumber[],
    tracks: defaultTracks as Track[],
    bazar: defaultBazar as BazarCategory[],
    testimonials: defaultTestimonials as Testimonial[],
    partners: defaultPartners as Partner[],
    posts: defaultPosts as BlogPost[],
    faq: defaultFAQ as FAQItem[],
    donate: defaultDonate as DonateInfo,
    contact: defaultContact as ContactInfo,
    transparency: defaultTransparency as TransparencyInfo,
    ready: false,
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [
        hero,
        about,
        founders,
        mission,
        services,
        impact,
        tracks,
        bazar,
        testimonials,
        partners,
        posts,
        faq,
        donate,
        contact,
        transparency,
      ] = await Promise.all([
        getHero(),
        getAbout(),
        getFounders(),
        getMission(),
        getServices(),
        getImpactNumbers(),
        getTracks(),
        getBazar(),
        getTestimonials(),
        getPartners(),
        getBlogPosts(),
        getFAQ(),
        getDonate(),
        getContact(),
        getTransparency(),
      ]);
      if (!mounted) return;
      setData({
        hero,
        about,
        founders,
        mission,
        services,
        impact,
        tracks,
        bazar,
        testimonials,
        partners,
        posts,
        faq,
        donate,
        contact,
        transparency,
        ready: isSupabaseReady(),
      });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#E31B23] selection:text-white">
      <Navbar />

      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Founders founders={data.founders} />
        <Mission pillars={data.mission} />
        <Services services={data.services} />
        <ImpactNumbers numbers={data.impact} />
        <GetInvolved tracks={data.tracks} />
        <Bazar items={data.bazar} />
        <Testimonials items={data.testimonials} />
        <Partners partners={data.partners} />
        <Blog posts={data.posts} />
        <Transparency info={data.transparency} />
        <FAQ items={data.faq} />
        <DonateCTA info={data.donate} />
      </main>

      <Footer contact={data.contact} transparency={data.transparency} />

      <WhatsAppFloat
        whatsapp={data.contact.whatsapp}
        whatsappDisplay={data.contact.whatsappDisplay}
      />
      <ScrollTop />
      <CookieBanner />

      {/* Indicador discreto: só aparece se não estiver conectado ao Supabase (modo fallback) */}
      {!data.ready && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-2 left-2 z-30 text-[10px] font-mono text-slate-400 bg-white/80 px-2 py-1 rounded border border-slate-200 pointer-events-none">
          modo local · sem supabase
        </div>
      )}
    </div>
  );
}
