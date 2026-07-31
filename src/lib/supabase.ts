/**
 * Cliente Supabase + camada de dados com fallback estático.
 *
 * IMPORTANTE:
 * - O painel CMS está sendo construído separadamente.
 * - Enquanto ele não estiver pronto, o site usa os dados deste arquivo (mock/fallback).
 * - Quando o CMS estiver pronto, basta configurar VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY
 *   e ativar as queries reais em supabase.ts.
 *
 * Mesmo após a conexão com o CMS, este arquivo continua como seed/fallback
 * para ambiente local sem chaves.
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import {
  defaultHero,
  defaultAbout,
  defaultFounders,
  defaultMission,
  defaultServices,
  defaultImpactNumbers,
  defaultTracks,
  defaultBazar,
  defaultTestimonials,
  defaultPartners,
  defaultPosts,
  defaultFAQ,
  defaultDonate,
  defaultContact,
  defaultTransparency,
  type Hero,
  type About,
  type Founder,
  type MissionPillar,
  type Service,
  type ImpactNumber,
  type Track,
  type BazarCategory,
  type Testimonial,
  type Partner,
  type BlogPost,
  type FAQItem,
  type DonateInfo,
  type ContactInfo,
  type TransparencyInfo,
} from './data';

/* -------------------- Cliente Supabase -------------------- */
let supabase: SupabaseClient | null = null;

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (url && anon) {
  supabase = createClient(url, anon);
}

export function isSupabaseReady(): boolean {
  return supabase !== null;
}

/* -------------------- Helpers -------------------- */
async function safeFetch<T>(
  table: string,
  orderColumn: string | null,
  opts: { ascending?: boolean; limit?: number } = {},
  fallback: T,
): Promise<T> {
  if (!supabase) return fallback;
  try {
    let q = supabase.from(table).select('*');
    if (orderColumn) q = q.order(orderColumn, { ascending: opts.ascending ?? true });
    if (opts.limit) q = q.limit(opts.limit);
    const { data, error } = await q;
    if (error) throw error;
    if (!data || data.length === 0) return fallback;
    return data as unknown as T;
  } catch (e) {
    console.warn(`[supabase] Falha ao buscar "${table}", usando fallback estático.`, e);
    return fallback;
  }
}

async function safeFetchSingle<T>(table: string, fallback: T): Promise<T> {
  if (!supabase) return fallback;
  try {
    const { data, error } = await supabase.from(table).select('*').limit(1).maybeSingle();
    if (error) throw error;
    if (!data) return fallback;
    return data as unknown as T;
  } catch (e) {
    console.warn(`[supabase] Falha ao buscar "${table}" (single), usando fallback estático.`, e);
    return fallback;
  }
}

/* -------------------- API pública -------------------- */
export async function getHero(): Promise<Hero> {
  return safeFetchSingle('site_hero', defaultHero);
}
export async function getAbout(): Promise<About> {
  return safeFetchSingle('site_about', defaultAbout);
}
export async function getFounders(): Promise<Founder[]> {
  return safeFetch('site_founders', 'order', { ascending: true }, defaultFounders);
}
export async function getMission(): Promise<MissionPillar[]> {
  return safeFetch('site_mission', 'order', { ascending: true }, defaultMission);
}
export async function getServices(): Promise<Service[]> {
  return safeFetch('site_services', 'order', { ascending: true }, defaultServices);
}
export async function getImpactNumbers(): Promise<ImpactNumber[]> {
  return safeFetch('site_impact', 'order', { ascending: true }, defaultImpactNumbers);
}
export async function getTracks(): Promise<Track[]> {
  return safeFetch('site_tracks', 'order', { ascending: true }, defaultTracks);
}
export async function getBazar(): Promise<BazarCategory[]> {
  return safeFetch('site_bazar', 'order', { ascending: true }, defaultBazar);
}
export async function getTestimonials(): Promise<Testimonial[]> {
  return safeFetch('site_testimonials', 'order', { ascending: true }, defaultTestimonials);
}
export async function getPartners(): Promise<Partner[]> {
  return safeFetch('site_partners', 'order', { ascending: true }, defaultPartners);
}
export async function getBlogPosts(limit = 3): Promise<BlogPost[]> {
  return safeFetch('site_posts', 'published_at', { ascending: false, limit }, defaultPosts);
}
export async function getFAQ(): Promise<FAQItem[]> {
  return safeFetch('site_faq', 'order', { ascending: true }, defaultFAQ);
}
export async function getDonate(): Promise<DonateInfo> {
  return safeFetchSingle('site_donate', defaultDonate);
}
export async function getContact(): Promise<ContactInfo> {
  return safeFetchSingle('site_contact', defaultContact);
}
export async function getTransparency(): Promise<TransparencyInfo> {
  return safeFetchSingle('site_transparency', defaultTransparency);
}
