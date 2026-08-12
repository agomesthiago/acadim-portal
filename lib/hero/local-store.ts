import fs from 'fs/promises';
import path from 'path';

export interface HeroData {
  tag: string;
  title: string;
  subtitle: string;
  bgImage: string;
  bgAlt: string;
  cta1Text: string;
  cta1Action: string;
  cta2Text: string;
  cta2Action: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const HERO_FILE = path.join(DATA_DIR, 'hero.json');

const defaultHero: HeroData = {
  tag: 'Associação Carioca de Distrofia Muscular',
  title: 'Bem-vindo à ACADIM',
  subtitle: 'Você não está sozinho. Nós caminhamos juntos pelo acolhimento, saúde e direitos.',
  bgImage: '/assets/hero-bg.jpg',
  bgAlt: 'Família e comunidade ACADIM reunidos com acolhimento',
  cta1Text: 'Fazer Doação',
  cta1Action: 'pix',
  cta2Text: 'CADASTRE-SE',
  cta2Action: 'https://docs.google.com/forms/d/e/1FAIpQLSe8T95-5_uJCXLVs4XDPOsAOKDhcKGOXbmHHGbKH3E-HkJEvw/viewform',
};

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory may already exist
  }
}

export async function getHeroData(): Promise<HeroData> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(HERO_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    // Merge with defaults so old hero.json files without CTAs still work
    return { ...defaultHero, ...parsed };
  } catch {
    return defaultHero;
  }
}

export async function saveHeroData(data: HeroData): Promise<HeroData> {
  await ensureDataDir();
  const tempFile = `${HERO_FILE}.tmp.${Date.now()}`;
  await fs.writeFile(tempFile, JSON.stringify(data, null, 2), 'utf-8');
  await fs.rename(tempFile, HERO_FILE);
  return data;
}
