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

## Persistência em Produção (planejado, NÃO validado nesta fase)

O `NewsRepository` usa um `StorageDriver` injetável. Para produção, a implementação
atual é `LocalFileStorageDriver`. Para Vercel Hobby + persistência real, o passo
seguinte (fora do escopo desta fase) é criar um `HttpKvStorageDriver` que fale com
um Redis-compatible REST (Upstash free tier) **sem alterar** a interface do
Repository nem os Route Handlers.

Variáveis que seriam necessárias em produção (NÃO configurar agora):
- `ADMIN_SECRET_KEY` (obrigatória)
- `KV_REST_API_URL` e `KV_REST_API_TOKEN` (futuro, quando a conta for provisionada)

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
