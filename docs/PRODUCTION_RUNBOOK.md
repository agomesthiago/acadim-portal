# ACADIM Production Runbook

## Requisitos e Setup
- **Pré-requisitos:** Node 20+, npm.
- **Instalação:** `npm ci`
- **Desenvolvimento:** `npm run dev` (Inicia local no port 3000)

## Validação e Qualidade de Código (QA)
- **TypeScript Check:** `npm run typecheck`
- **Lint:** `npm run lint`
- **Testes E2E e Acessibilidade (Playwright):** 
  - `npm run test:qa` (Suite normal)
  - `npm run test:qa-dark` (Suite de contraste/matrix)
  - `npm run test:qa-regression` (Regressão visual)

## Build e Deploy
- **Build da Aplicação:** `npm run build`
- **Preview de Produção:** `npm run start`
- **Variáveis de ambiente (.env):** Nenhuma obrigatória para build, visto que os dados são mockados / exportados de arquivos locais `.ts` (`lib/news-data.ts`, etc).
- **Hospedagem Recomendada:** Vercel, Netlify (requer suporte a SSR, já que rotas dinâmicas como `/noticias/[slug]` dependem disso por ausência de `generateStaticParams`).
- **CI/CD:** Automatizado via `.github/workflows/ci.yml`. Pipeline atual instala deps, roda lint, roda build e os scripts do Playwright, publicando artefatos em caso de regressão.

## Operações (Ops) e Mitigações
- **Rollback:** Procedimento padrão via git `git revert HEAD` e envio de novo push para o branch principal, disparando CI/CD ou redeploy no host edge.
- **Monitoramento:** **MANUAL REQUIRED** - Atualmente não há nenhuma integração de telemetria de produção, observability (Datadog, Sentry, New Relic) ou Web Vitals Tracking (Vercel Analytics). É estritamente recomendado implementar alguma solução.

---

## Production Readiness Audit (Track S)
O App Router do Next.js recomenda fortes padrões de "Error Boundaries", "Suspense" e "Not Found UI" para excelência em UX de produção.

Foram identificadas as seguintes **Pendências (Gaps de Readiness)**:
1. **Falta do `not-found.tsx`**: O projeto não tem tratativa visual amigável global caso o usuário acesse uma página ou slug incorreto.
2. **Falta do `error.tsx`**: O projeto falha globalmente (Client Side Exception ou Server 500 default) caso algum componente jogue uma exceção não-tratada, pois não existe Error Boundary customizado.
3. **Falta de `loading.tsx`**: As rotas que atualmente disparam SSR (as dinâmicas) trarão melhor percepção de performance com instant-loading-states (Suspense) caso seja implementado um `loading.tsx`.

*A recomendação é implementar os arquivos `app/not-found.tsx`, `app/error.tsx` e `app/loading.tsx` nas próximas iterações.*
