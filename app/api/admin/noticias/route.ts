import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { newsRepository } from '@/lib/news/news-repository';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(request: Request) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado. Autenticação requerida.' }, { status: 401 });
    }

    const records = await newsRepository.listAllRecords();
    return NextResponse.json(records, {
      headers: {
        'Cache-Control': 'private, no-store, no-cache, must-revalidate, max-age=0',
      },
    });
  } catch (error) {
    console.error('[API Admin GET Error]:', error);
    return NextResponse.json({ error: 'Erro ao listar notícias do painel' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado. Autenticação requerida.' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || typeof body.title !== 'string' || !body.title.trim()) {
      return NextResponse.json({ error: 'O título é obrigatório.' }, { status: 400 });
    }

    const newRecord = await newsRepository.createRecord(body);

    // Instant Revalidation de Cache ISR para Next.js
    revalidatePath('/', 'layout');
    revalidatePath('/noticias');
    revalidatePath('/sitemap.xml');

    return NextResponse.json(newRecord, { status: 201 });
  } catch (error) {
    console.error('[API Admin POST Error]:', error);
    return NextResponse.json({ error: 'Erro ao criar notícia no painel' }, { status: 500 });
  }
}
