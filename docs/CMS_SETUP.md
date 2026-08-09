# CMS Editorial — Setup e Arquitetura

## Visão Geral da Arquitetura

```
Admin UI (app/admin/noticias/*)
       ↓
Route Handlers (app/api/admin/noticias/*)
       ↓
NewsRepository (lib/news/news-repository.ts)  ← interface estável
       ↓
StorageDriver  ← plugável
       ↓
   [dev]  LocalFileStorageDriver → data/custom-news.json
   [prod] (futuro) UpstashStorageDriver / VercelKV / etc.
```

## Desenvolvimento Local

1. Copie `.env.example` para `.env.local`:
   ```powershell
   Copy-Item .env.example .env.local
   ```
2. Defina `ADMIN_SECRET_KEY` com um valor local de teste (qualquer string).
3. Rode:
   ```
   npm run dev
   ```
4. Acesse `http://localhost:3000/admin/login` e use o valor de `ADMIN_SECRET_KEY`.
5. O CRUD persiste em `data/custom-news.json` (ignorado pelo git).

## 4 Notícias-Base

As 4 notícias em `lib/news/static-news.ts` são **permanentes** e vivem no código.
- Aparecem no site, sitemap e SEO.
- NUNCA são gravadas no storage customizado.
- NUNCA aparecem editáveis no CMS (somente leitura, seção separada).

## Airtable

- Os 43 registros antigos permanecem ignorados (sem corpo editorial).
- Airtable é apenas fonte secundária opcional e falha silenciosa.
- Se `AIRTABLE_TOKEN`/`AIRTABLE_BASE_ID` estiverem vazios, integração desliga limpa.

## Persistência em Produção

O `NewsRepository` usa um `StorageDriver` injetável com seleção automática:

- **Local** (sem env): `LocalFileStorageDriver` → `data/custom-news.json`
- **Produção** (com `KV_REST_API_URL` + `KV_REST_API_TOKEN`): `UpstashStorageDriver` → Upstash Redis REST

### Configurar Upstash (gratuito, sem cartão)

1. Acesse https://upstash.com e crie conta gratuita
2. Create Database → Redis → escolha região próxima (ex.: `us-east-1`)
3. No painel do database, copie:
   - `UPSTASH_REDIS_REST_URL` (ex.: `https://xyz.upstash.io`)
   - `UPSTASH_REDIS_REST_TOKEN` (bearer token)
4. Na Vercel: Project → Settings → Environment Variables → Production:
   - `ADMIN_SECRET_KEY` = `<segredo forte>`
   - `KV_REST_API_URL` = `<REST URL>`
   - `KV_REST_API_TOKEN` = `<REST TOKEN>`
5. Redeploy

### Semântica de erro

Se a gravação no Upstash falhar em produção, a API retorna HTTP 500 explícito
ao editor. **Nunca** informamos "sucesso" sem persistência confirmada.

### Concorrência serverless

Upstash `SET` é atômico por chave no servidor, mas a leitura-modificação-escrita
do array inteiro é **last-write-wins** entre instâncias serverless simultâneas.
Para o volume editorial do site (redação pequena, baixa frequência), o risco
é aceitável. Limitação documentada; para writes concorrentes frequentes seria
necessário `WATCH/MULTI/EXEC`.

## Segurança

- `ADMIN_SECRET_KEY` NÃO tem fallback hardcoded.
- Se ausente, login admin falha com erro 500 explícito.
- Cookie é `httpOnly`, `sameSite=lax`, `secure` em produção.
- Sanitização de HTML ocorre **no servidor** antes da persistência.
- Nenhum segredo vai para o cliente.
- `.env.local`, `.env*`, `data/custom-news.json` estão no `.gitignore`.

## Critérios desta fase

- CMS **local** funcional: login, CRUD, draft/publish, slugs únicos, sanitização.
- Repositório desacoplado via `StorageDriver`.
- Build/typecheck/lint limpos.
- NENHUMA persistência de produção foi validada nesta fase (sem acesso Vercel/GitHub).
