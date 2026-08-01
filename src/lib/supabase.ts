import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Se as variáveis não estiverem configuradas (modo local/preview), criamos um
// cliente "mock" que retorna arrays vazios, em vez de quebrar a UI.
// Isso permite rodar o site localmente sem .env antes da conexão com o Supabase.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : createClient('https://placeholder.supabase.co', 'public.placeholder', {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: async () =>
          new Response(JSON.stringify({ data: [], error: { message: 'Supabase not configured' } }), {
            headers: { 'Content-Type': 'application/json' },
          }),
      },
    });

if (!isSupabaseConfigured && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    '[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY não encontradas. ' +
      'Rodando em modo local sem banco de dados. Crie .env.local com suas chaves para conectar.',
  );
}
