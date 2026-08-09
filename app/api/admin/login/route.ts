import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { validatePassword, ADMIN_COOKIE_NAME } from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || !validatePassword(password)) {
      return NextResponse.json({ error: 'Senha de acesso administrativa inválida.' }, { status: 401 });
    }

    const { getAdminSecret } = await import('@/lib/admin-auth');
    const secret = getAdminSecret();
    if (!secret) {
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta. Contate o administrador.' },
        { status: 500 }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set(ADMIN_COOKIE_NAME, secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    return NextResponse.json({ success: true, message: 'Autenticado com sucesso' });
  } catch (error) {
    console.error('[API Admin Login Error]:', error);
    return NextResponse.json({ error: 'Erro ao processar login' }, { status: 500 });
  }
}
