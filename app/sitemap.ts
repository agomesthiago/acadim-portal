import { MetadataRoute } from 'next';
import { getAllDiseases } from '@/lib/distrofias-data';
import { getAllNewsAsync } from '@/lib/news-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://acadim.org.br';

  const diseases = getAllDiseases();
  const news = await getAllNewsAsync();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/distrofias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/redacao`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const diseaseRoutes: MetadataRoute.Sitemap = diseases.map((d) => ({
    url: `${baseUrl}/distrofias/${d.slug}`,
    lastModified: new Date(d.lastReviewed),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${baseUrl}/noticias/${n.slug}`,
    lastModified: new Date(n.updatedAt || n.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...diseaseRoutes, ...newsRoutes];
}
