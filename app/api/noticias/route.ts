import { NextResponse } from 'next/server';
import { getAllNewsAsync } from '@/lib/news-data';

export async function GET() {
  try {
    const articles = await getAllNewsAsync();

    return NextResponse.json(articles, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('[API Noticias Error]:', error);
    return NextResponse.json({ error: 'Erro ao carregar notícias' }, { status: 500 });
  }
}
