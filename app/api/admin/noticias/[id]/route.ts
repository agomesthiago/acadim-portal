import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { newsRepository } from '@/lib/news/news-repository';
import { verifyAdminAuth } from '@/lib/admin-auth';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado. Autenticação requerida.' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const updated = await newsRepository.updateRecord(id, body);
    if (!updated) {
      return NextResponse.json({ error: 'Notícia não encontrada' }, { status: 404 });
    }

    // Revalidação Instantânea de Cache ISR em todas as rotas públicas
    revalidatePath('/', 'layout');
    revalidatePath('/noticias');
    revalidatePath(`/noticias/${updated.slug}`);
    revalidatePath('/api/noticias');
    revalidatePath('/sitemap.xml');

    return NextResponse.json(updated);
  } catch (error) {
    console.error('[API Admin PUT Error]:', error);
    return NextResponse.json({ error: 'Erro ao atualizar notícia' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado. Autenticação requerida.' }, { status: 401 });
    }

    const { id } = await params;

    const success = await newsRepository.deleteRecord(id);
    if (!success) {
      return NextResponse.json({ error: 'Notícia não encontrada para exclusão' }, { status: 404 });
    }

    // Revalidação Instantânea de Cache ISR em todas as rotas afetadas
    revalidatePath('/', 'layout');
    revalidatePath('/noticias');
    revalidatePath('/api/noticias');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({ success: true, message: 'Notícia excluída com sucesso' });
  } catch (error) {
    console.error('[API Admin DELETE Error]:', error);
    return NextResponse.json({ error: 'Erro ao excluir notícia' }, { status: 500 });
  }
}
