import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jsfnzpzybzxngjcyuict.supabase.co';
const serviceRoleKey = 'sb_secret_w9yU6ltLjjpg4NFqtel5qw_29RLMKSS';

// Iniciando o cliente com a chave secreta de admin
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdminUser() {
  console.log('Criando usuário...');
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'admin@acadim.org.br',
    password: 'admin123456',
    email_confirm: true // Isso ignora a confirmação de e-mail automaticamente
  });

  if (error) {
    console.error('Erro ao criar usuário:', error.message);
  } else {
    console.log('Usuário criado/ativado com sucesso!', data.user.email);
  }
}

createAdminUser();
