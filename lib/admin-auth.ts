import { cookies } from 'next/headers';

/**
 * IMPORTANTE: NUNCA usar fallback hardcoded para ADMIN_SECRET_KEY.
 * O segredo deve ser configurado via variável de ambiente.
 * Em desenvolvimento local, configure .env.local com ADMIN_SECRET_KEY.
 */
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY;

if (!ADMIN_SECRET) {
  console.error(
    '[Admin Auth Error] ADMIN_SECRET_KEY não está configurada. ' +
    'Configure a variável de ambiente para habilitar o login administrativo.'
  );
}

export const ADMIN_COOKIE_NAME = 'acadim_admin_token';

/**
 * Valida a autenticação administrativa em Route Handlers de API.
 * Verifica o cabeçalho Authorization/x-admin-token ou o cookie HTTP-only.
 */
export async function verifyAdminAuth(request: Request): Promise<boolean> {
  if (!ADMIN_SECRET) {
    console.error('[Admin Auth Error] Tentativa de autenticação sem ADMIN_SECRET_KEY configurada');
    return false;
  }

  // 1. Verificar cabeçalhos de requisição
  const authHeader = request.headers.get('authorization');
  const customHeader = request.headers.get('x-admin-token');

  if (customHeader === ADMIN_SECRET) return true;
  if (authHeader && authHeader.replace(/^Bearer\s+/i, '') === ADMIN_SECRET) return true;

  // 2. Verificar cookie de sessão
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (token === ADMIN_SECRET) return true;
  } catch (err) {
    console.warn('[Admin Auth Warning] Erro ao ler cookies:', err);
  }

  return false;
}

export function validatePassword(password: string): boolean {
  if (!ADMIN_SECRET) return false;
  return password === ADMIN_SECRET;
}

/**
 * Retorna o segredo administrativo para uso interno no servidor.
 * Retorna string vazia se não configurado (login falhará com mensagem de erro).
 */
export function getAdminSecret(): string {
  return ADMIN_SECRET || '';
}
