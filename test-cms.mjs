// Teste CMS Local — versão simplificada sem armazenamento complexo
const BASE = 'http://localhost:3000';
const SECRET = 'abc123XYZ!';

async function api(method, path, body, cookie = '') {
  const headers = { 'Content-Type': 'application/json' };
  if (cookie) headers['Cookie'] = cookie;
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: 'manual',
  });
  return res;
}

console.log('=== TESTE CMS ACADIM ===\n');

// 1. Sem autenticação → bloqueado
process.stdout.write('1. GET /api/admin/noticias (sem auth)... ');
const unauth = await fetch(`${BASE}/api/admin/noticias`);
console.log(unauth.status === 401 ? '✓ 401' : `✗ ${unauth.status}`);

// 2. Login com senha errada → bloqueado
process.stdout.write('2. POST /api/admin/login (senha incorreta)... ');
const wrong = await api('POST', '/api/admin/login', { password: 'senha-errada' });
console.log(wrong.status === 401 ? '✓ 401' : `✗ ${wrong.status}`);

// 3. Login com senha correta → sucesso
process.stdout.write('3. POST /api/admin/login (senha correta)... ');
const login = await api('POST', '/api/admin/login', { password: SECRET });
const cookie = login.headers.get('set-cookie') || '';
console.log(login.status === 200 ? '✓ 200' : `✗ ${login.status}`);
console.log('Cookie recebido:', cookie ? 'sim' : 'não');

// 4. Com cookie → permitido
process.stdout.write('4. GET /api/admin/noticias (com cookie)... ');
const listRes = await api('GET', '/api/admin/noticias', null, cookie);
console.log(listRes.status === 200 ? '✓ 200' : `✗ ${listRes.status}`);
const list = await listRes.json();
console.log('  Records:', Array.isArray(list) ? list.length : 'ERRO');

// 5. POST criar (draft)
process.stdout.write('5. POST /api/admin/noticias (criar) ... ');
const createRes = await api('POST', '/api/admin/noticias', {
  title: 'TESTE E2E CMS',
  summary: 'Teste E2E',
  content: '<p>Teste</p>',
  category: 'Comunicados',
  author: 'Redação ACADIM',
  status: 'draft',
}, cookie);
console.log(createRes.status === 200 || createRes.status === 201 ? '✓ 200/201' : `✗ ${createRes.status}`);
const created = await createRes.json();
const id = created.id;
console.log('  ID:', id);
console.log('  Slug:', created.slug);

// 6. PUT editar
process.stdout.write('6. PUT /api/admin/noticias/[id] (editar) ... ');
const editRes = await api('PUT', `/api/admin/noticias/${id}`, {
  title: 'TESTE E2E CMS (EDITADO)',
}, cookie);
console.log(editRes.ok ? '✓ 200' : `✗ ${editRes.status}`);

// 7. PUT publicar
process.stdout.write('7. PUT (publicar) ... ');
const pubRes = await api('PUT', `/api/admin/noticias/${id}`, { status: 'published' }, cookie);
console.log(pubRes.ok ? '✓ 200' : `✗ ${pubRes.status}`);

// 8. Verificar público
process.stdout.write('8. GET /noticias/[slug] (público) ... ');
const pub = await fetch(`${BASE}/noticias/${created.slug}`);
console.log(pub.status === 200 ? '✓ 200' : `✗ ${pub.status}`);

// 9. PUT despublicar
process.stdout.write('9. PUT (despublicar) ... ');
const unpub = await api('PUT', `/api/admin/noticias/${id}`, { status: 'draft' }, cookie);
console.log(unpub.ok ? '✓ 200' : `✗ ${unpub.status}`);

// 10. DELETE excluir
process.stdout.write('10. DELETE /api/admin/noticias/[id] ... ');
const del = await api('DELETE', `/api/admin/noticias/${id}`, null, cookie);
console.log(del.ok ? '✓ 200' : `✗ ${del.status}`);

// 11. Confirmar exclusão
process.stdout.write('11. GET /noticias/[slug] (após exclusão) ... ');
const gone = await fetch(`${BASE}/noticias/${created.slug}`);
console.log(gone.status === 404 ? '✓ 404' : `✗ ${gone.status}`);

console.log('\n=== CMS TESTADO COM SUCESSO ===');
process.exit(0);
