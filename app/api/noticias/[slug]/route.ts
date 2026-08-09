import { NextResponse } from 'next/server';
import { getNewsBySlugAsync } from '@/lib/news-data';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: 'Slug inválido' }, { status: 400 });
    }

    const article = await getNewsBySlugAsync(slug);

    if (!article) {
      return NextResponse.json({ error: 'Notícia não encontrada' }, { status: 404 });
    }

    const responsePayload = {
      id: article.slug,
      title: article.title,
      slug: article.slug,
      summary: article.excerpt,
      content: article.content,
      publishedAt: article.publishedAt,
      category: article.category,
      tags: article.tags || [],
      image: article.coverImage,
      featured: Boolean(article.featured),
      author: article.author.name,
      readTime: article.readTime,
      primarySource: article.primarySource,
    };

    return NextResponse.json(responsePayload, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('[API Noticias Slug Error]:', error);
    return NextResponse.json({ error: 'Erro interno do servidor ao carregar a notícia' }, { status: 500 });
  }
}
