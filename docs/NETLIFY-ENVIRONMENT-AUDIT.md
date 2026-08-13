# NETLIFY ENVIRONMENT AUDIT — PORTAL ACADIM
## CLASSIFICAÇÃO E INSTRUÇÕES DE CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE

**Data da Auditoria:** 13/08/2026  
**Objetivo:** Mapear todas as variáveis de ambiente necessárias para a operação segura e contínua do Portal ACADIM no Netlify (Site Settings → Environment Variables).

---

## 1. MATRIZ DE VARIÁVEIS DE AMBIENTE

| Variável | Classificação | Âmbito | Descrição | Valor Recomendado |
|---|---|---|---|---|
| `ADMIN_SECRET_KEY` | **SERVER / CMS** | Runtime (Server) | Chave secreta de autenticação do Painel Admin (`/api/admin/*`) | String estocástica forte de 32+ caracteres |
| `KV_REST_API_URL` | **SERVER / CMS** | Runtime (Server) | URL do banco Upstash Redis REST para persistência Serverless | `https://<instancia>.upstash.io` |
| `KV_REST_API_TOKEN` | **SERVER / CMS** | Runtime (Server) | Token Bearer de escrita/leitura no Upstash Redis REST | Token fornecido pelo painel Upstash |
| `UPSTASH_REDIS_REST_URL` | **SERVER / CMS (Alt)** | Runtime (Server) | Nome alternativo para `KV_REST_API_URL` | Igual a `KV_REST_API_URL` |
| `UPSTASH_REDIS_REST_TOKEN` | **SERVER / CMS (Alt)** | Runtime (Server) | Nome alternativo para `KV_REST_API_TOKEN` | Igual a `KV_REST_API_TOKEN` |
| `AIRTABLE_TOKEN` | **SERVER / CMS (Opcional)** | Runtime (Server) | Token de integração opcional com Airtable | Vazio se desabilitado |
| `AIRTABLE_BASE_ID` | **SERVER / CMS (Opcional)** | Runtime (Server) | Base ID do Airtable | Vazio se desabilitado |
| `AIRTABLE_TABLE_NAME` | **SERVER / CMS (Opcional)** | Runtime (Server) | Nome da Tabela no Airtable | `NOTICIAS` (padrão) |

> ⚠️ **REGRA DE SEGURANÇA ABSOLUTA:** NENHUMA destas variáveis possui o prefixo `NEXT_PUBLIC_`. Elas são estritamente acessíveis no lado do servidor (Server Components e Route Handlers) e jamais são vazadas para o navegador do cliente.

---

## 2. INSTRUÇÕES DE CONFIGURAÇÃO NO NETLIFY DASHBOARD

1. Acesse **Netlify Dashboard** → selecione o projeto `acadim-portal`.
2. Vá em **Site Configuration** → **Environment variables**.
3. Clique em **Add a variable** → selecione **Same value for all deploy contexts**.
4. Cadastre as variáveis obrigatórias:
   - `ADMIN_SECRET_KEY`: `<token_secreto_da_ong>`
   - `KV_REST_API_URL`: `https://<seu_instancia>.upstash.io`
   - `KV_REST_API_TOKEN`: `<seu_bearer_token>`
5. Salve as alterações e acione um novo deploy (**Deploys** → **Trigger deploy**).
