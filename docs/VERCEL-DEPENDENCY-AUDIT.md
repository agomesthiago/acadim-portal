# VERCEL DEPENDENCY AUDIT — PORTAL ACADIM
## AUDITORIA FORENSE DE DEPENDÊNCIAS DA PLATAFORMA VERCEL

**Data da Auditoria:** 13/08/2026  
**Objetivo:** Identificar todas as dependências, configurações, variáveis de ambiente e código associado à infraestrutura da Vercel para desativação e substituição limpa pelo Netlify.

---

## 1. CATEGORIZAÇÃO DAS DEPENDÊNCIAS

### A. Dependências de Pacotes (`package.json`)
- **Resultado:** 0 dependências npm da Vercel no `package.json` (NÃO há `@vercel/blob`, `@vercel/kv`, `@vercel/analytics`, `@vercel/og` ou similares instalados no projeto).
- **Pacotes Core:** `next` (v16.3.0), `react` (v19.2.8), `@uiw/react-md-editor`, `rehype-sanitize`, `lucide-react`. Todos são 100% agnósticos de plataforma.

### B. Variáveis de Ambiente
- `.env.local`: Contém `VERCEL_OIDC_TOKEN` (gerado automaticamente pela CLI local da Vercel). Deve ser removido ao desvincular.
- `.env.example`: Referencia instruções de implantação no painel da Vercel e variáveis `KV_REST_API_URL` / `UPSTASH_REDIS_REST_URL`.
- `process.env.VERCEL*`: NENHUM uso de variáveis nativas da Vercel (`VERCEL_URL`, `VERCEL_ENV`, `VERCEL_REGION`) em código de aplicação.

### C. Módulo de Storage / CMS (`lib/news/news-repository.ts`)
- O repositório possui a classe `UpstashStorageDriver` que aceita as variáveis `KV_REST_API_URL` / `KV_REST_API_TOKEN` ou `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.
- **Análise de Portabilidade:** O Upstash Redis opera via REST/HTTP (`fetch`), portanto funciona em **qualquer** servidor, incluindo o Netlify Functions / OpenNext / Node.js. Não é exclusivo da Vercel.
- **Modo Local:** `LocalFileStorageDriver` salva em `data/custom-news.json`.

### D. Configurações de Deploy
- `vercel.json`: Não existe no repositório.
- `.vercel/`: Diretório de cache e vinculação da CLI local da Vercel (deve estar em `.gitignore`).

### E. Documentação
- Vários arquivos em `docs/` (`CMS_AIRTABLE_GUIDE.md`, `CMS_SETUP.md`, `DEPLOYMENT.md`, `KNOWN-LIMITATIONS.md`, `PLAN-arquitetura-midia-noticias.md`, `PRODUCTION_RUNBOOK.md`, `REPOSITORY_MIGRATION.md`, `SECURITY_AUDIT.md`) mencionam Vercel em orientações de implantação e histórico.

---

## 2. RESUMO DE SEGREGABILIDADE

| Elemento | Status | Ação Requerida para Netlify |
|---|---|---|
| Pacotes npm (`package.json`) | 🟢 Limpo (0 deps Vercel) | Nenhuma remoção de biblioteca necessária |
| `next.config.ts` | 🟢 Limpo (Headers/CSP nativos) | Manter intacto (compatível com OpenNext/Netlify) |
| `lib/news/news-repository.ts` | 🟢 Agnóstico | Funciona no Netlify via Upstash REST ou Local (dev) |
| `.env.example` | 🟡 Referências textuais | Atualizar documentação para Netlify Environment Vars |
| `.env.local` | 🟡 `VERCEL_OIDC_TOKEN` | Remover linha da Vercel CLI |
| Documentação (`docs/`) | 🟡 Menções históricas | Atualizar guias para o fluxo Netlify |

---

## 3. CONCLUSÃO DA AUDITORIA

O Portal ACADIM foi arquitetado com padrões Next.js padrão, **sem acoplamento proprietário** à Vercel. A transição para o Netlify exige apenas a configuração de variáveis de ambiente no Netlify Dashboard e a criação do arquivo de build `netlify.toml` otimizado para Next.js 16 (App Router).
