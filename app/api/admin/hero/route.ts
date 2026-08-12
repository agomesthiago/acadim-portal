import { NextRequest, NextResponse } from 'next/server';
import { getHeroData, saveHeroData } from '@/lib/hero/local-store';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado.' }, { status: 401 });
    }

    const data = await getHeroData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API Admin Hero GET Error]:', error);
    return NextResponse.json({ error: 'Erro ao carregar dados da Hero' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Acesso não autorizado.' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.tag) {
      return NextResponse.json({ error: 'Título e Tag são obrigatórios.' }, { status: 400 });
    }

    const updated = await saveHeroData(body);
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API Admin Hero PUT Error]:', error);
    return NextResponse.json({ error: 'Erro ao salvar dados da Hero' }, { status: 500 });
  }
}
