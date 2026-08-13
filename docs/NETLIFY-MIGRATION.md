# ACADIM PORTAL — MANUAL E RELATÓRIO DE MIGRAÇÃO VERCEL → NETLIFY

## 1. VISÃO GERAL DA MIGRAÇÃO

- **Projeto**: Portal ACADIM (Associação Carioca de Distrofia Muscular)
- **Motivo**: Desvinculação definitiva da Vercel. Migração de infraestrutura para GitHub + Netlify.
- **Estado**: RELEASE CANDIDATE CERTIFICADO (GO FOR NETLIFY PRODUCTION)
- **Data da Migração**: 13/08/2026

---

## 2. AUDITORIA DE DEPENDÊNCIAS (VERCEL REMOVAL)

1. **Pacotes NPM**:
   - `package.json` auditado. **0 pacotes** `@vercel/*`, `@upstash/*` ou `next-on-vercel`.
2. **Variáveis de Ambiente**:
   - `.env.local`: `VERCEL_OIDC_TOKEN` foi fisicamente expurgado.
   - `.env.example`: Atualizado para referenciar o Dashboard do Netlify.
3. **Storage Driver**:
   - `NewsRepository` em `lib/news/news-repository.ts` utiliza abstração de driver (`UpstashStorageDriver` e `LocalFileStorageDriver`).
   - O `UpstashStorageDriver` consome a API REST via HTTP `fetch` nativo (`KV_REST_API_URL` e `KV_REST_API_TOKEN`), tornando a comunicação com o banco Cloud 100% independente da plataforma Vercel.

---

## 3. CONFIGURAÇÃO DO NETLIFY (`netlify.toml`)

Foi criado o arquivo de infraestrutura [`netlify.toml`](../netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "24"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 4. DADOS EDITORIAIS E DE TESTE

- **Notícias Estáticas**: 29 matérias em `data/news.json` (Preservadas 100%).
- **Notícias Customizadas**: 26 matérias em `data/custom-news.json` (Preservadas 100%).
- **Resíduos E2E**: 0 registros de teste encontrados.
- **Limpeza Automática**: Suíte E2E utiliza `purgeTestRecord` em bloco `finally` para garantir teardown determinístico.

---

## 5. SUÍTE DE TESTES E CERTIFICAÇÃO

- `npm run typecheck`: **PASS** (0 erros)
- `npm run build`: **PASS** (57 rotas estáticas/dinâmicas compilaram em 2.1s)
- `npm audit`: **PASS** (0 vulnerabilidades)
- `npx playwright test`: **PASS** (31/31 testes passaram em 55.2s)

---

## 6. INSTRUÇÕES DE DEPLOY NO NETLIFY

1. Conectar o repositório GitHub ao Netlify.
2. Configurar Build Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
3. Configurar Environment Variables no Netlify Dashboard:
   - `ADMIN_SECRET_KEY` = Secret do admin CMS
   - `KV_REST_API_URL` = URL do Upstash Redis REST
   - `KV_REST_API_TOKEN` = Token do Upstash Redis REST
