# MAPA DA SUPERFÍCIE DE ATAQUE E ANÁLISE DE SEGURANÇA OWASP

**Projeto:** ACADIM PORTAL  
**Data da Auditoria:** 12 de Agosto de 2026  
**Versão:** 1.0.0 (Pré-Entrega)  
**Escopo:** Workspace Local (`D:\projetos\acadim`) Exclusivo — Local-First  

---

## 1. MAPA DA SUPERFÍCIE DE ATAQUE (ATTACK SURFACE MAP)

| Componente | Tipo | Nível de Exposição | Ponto de Entrada / Mecanismo de Controle |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | Página Pública | Público | Renderização SSG/ISR, React Server Component |
| **Sobre Nós (`/sobre-nos`)** | Página Pública | Público | Renderização SSG/ISR, marcação institucional estática |
| **Enciclopédia (`/distrofias`)** | Página Pública | Público | Renderização estática com busca/filtro em Client Component puro |
| **Fichas Médicas (`/distrofias/[slug]`)** | Página Pública | Público | Rotas estáticas pre-renderizadas via `generateStaticParams` |
| **Central de Notícias (`/noticias`)** | Página Pública | Público | ISR com revalidação de 1 minuto |
| **Artigos de Notícias (`/noticias/[slug]`)** | Página Pública | Público | Sanitização de Markdown com `rehypeSanitize` |
| **Painel Admin (`/admin/login`)** | Formulário de Autenticação | Restrito | `POST /api/admin/login` com validação de senha via env var |
| **Painel Admin (`/admin/noticias`)** | Gestão de Conteúdo | Autenticado | Protegido por cookie HTTP-only `acadim_admin_token` e verificação de sessão |
| **Painel Admin (`/admin/hero`)** | Edição de Destaque | Autenticado | Protegido por cookie HTTP-only `acadim_admin_token` |
| **API (`/api/admin/noticias`)** | Route Handler HTTP | Autenticado | Exige cookie ou `Authorization: Bearer` / `x-admin-token` |
| **API (`/api/admin/upload`)** | Upload de Arquivos | Autenticado | Validação de extensão (`jpg`, `png`), limite 10MB, nome hash aleatório |
| **Armazenamento de Dados** | Arquivo JSON Local | Servidor Interno | Persistent `data/custom-news.json` gravado via escrita atômica (`.tmp`) |

---

## 2. AUDITORIA OWASP TOP 10 2025

| Categoria OWASP 2025 | Encontrado? | Severidade | Evidência / Mecanismo de Proteção | Arquivo | Teste Executado |
| :--- | :-: | :-: | :--- | :--- | :--- |
| **A01 Broken Access Control** | Não | Neutra | Rotas `/admin/*` e APIs `/api/admin/*` rejeitam acessos sem cookie/token com HTTP 401 e redirecionamento. | [`lib/admin-auth.ts`](file:///d:/projetos/acadim/lib/admin-auth.ts) | Playwright E2E: Redirecionamento e HTTP 401 validados **PASS** |
| **A02 Security Misconfiguration** | Não | Neutra | Security headers em `next.config.ts` (`X-Frame-Options`, `nosniff`, `poweredByHeader: false`). | [`next.config.ts`](file:///d:/projetos/acadim/next.config.ts) | Inspeção de cabeçalhos e Next build **PASS** |
| **A03 Software Supply Chain Failures** | Não | Neutra | Auditoria de pacotes npm zerada (`npm audit` = 0 vulnerabilidades). | [`package.json`](file:///d:/projetos/acadim/package.json) | `npm audit` executado com 0 falhas **PASS** |
| **A04 Cryptographic Failures** | Não | Neutra | Cookies de sessão com flags `httpOnly: true`, `sameSite: 'lax'`, e `secure` em produção. | [`app/api/admin/login/route.ts`](file:///d:/projetos/acadim/app/api/admin/login/route.ts) | Inspeção da API de login e teste Playwright **PASS** |
| **A05 Injection** | Não | Neutra | Slugs maliciosos (`../../etc/passwd`, `OR 1=1`) retornam 404 limpo sem exceções ou acesso a arquivos. | [`lib/news/news-service.ts`](file:///d:/projetos/acadim/lib/news/news-service.ts) | Playwright 5 Slugs Maliciosos **PASS** |
| **A06 Insecure Design** | Não | Neutra | Arquitetura local-first sem dependências de serviços externos críticos para renderização. | [`lib/news/local-store.ts`](file:///d:/projetos/acadim/lib/news/local-store.ts) | Network monitor local-first **PASS** |
| **A07 Authentication Failures** | Não | Neutra | Rejeição de senhas inválidas, sem fallbacks vulneráveis se `ADMIN_SECRET_KEY` ausente. | [`lib/admin-auth.ts`](file:///d:/projetos/acadim/lib/admin-auth.ts) | Teste de login com senha incorreta **PASS** |
| **A08 Software or Data Integrity Failures** | Não | Neutra | Persistência local atômica via arquivo temporário `.tmp` e `fs.renameSync` para evitar corrupção. | [`lib/news/local-store.ts`](file:///d:/projetos/acadim/lib/news/local-store.ts) | Teste de edição no Admin **PASS** |
| **A09 Security Logging and Alerting Failures** | Não | Neutra | Tratamento estruturado de erros com `try/catch` sem expor stack traces para o cliente. | [`app/api/admin/noticias/route.ts`](file:///d:/projetos/acadim/app/api/admin/noticias/route.ts) | Verificação de logs em erros simulados **PASS** |
| **A10 Mishandling of Exceptional Conditions** | Não | Neutra | Slugs inexistentes acionam `notFound()` renderizando a página 404 personalizada sem crash. | [`app/noticias/[slug]/page.tsx`](file:///d:/projetos/acadim/app/noticias/[slug]/page.tsx) | Diagnóstico de slug inválido **PASS** |

---

## 3. AUDITORIA DE XSS E SANITIZAÇÃO DE MARKDOWN

O portal renderiza matérias editoriais em Markdown. A segurança contra XSS foi auditada:
- **Componente:** [`components/MarkdownViewer.tsx`](file:///d:/projetos/acadim/components/MarkdownViewer.tsx)
- **Plugin de Sanitização:** `rehype-sanitize` utilizando o `defaultSchema` do HTML5.
- **Filtro de Iframes:** `rehypeFilterIframes` bloqueia seletivamente qualquer iframe que não seja do YouTube (`youtube.com` ou `youtu.be`).
- **Validação de Payload Adversarial:** Injeções do tipo `<script>alert(1)</script>`, `<img src=x onerror=...>` e `<a href="javascript:...">` são desarmadas ou removidas sem execução de JavaScript.

---

## 4. AUDITORIA DE SEGREDOS E CREDENCIAIS

- **Varredura em Código:** Realizada pesquisa por padrões de API keys, tokens JWT, senhas hardcoded e chaves privadas em todo o diretório `src`, `app`, `lib`, `components`, `data` e `public`.
- **Resultado:** **Zero segredos hardcoded encontrados**.
- **Variáveis de Ambiente:**
  - `ADMIN_SECRET_KEY`: Armazenada exclusivamente no arquivo de configuração local `.env.local`.
