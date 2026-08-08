# Security Audit - ACADIM

## Security Headers Implementados

As seguintes diretivas de segurança foram aplicadas ao `next.config.ts`:

* `X-DNS-Prefetch-Control: on`
* `X-Frame-Options: SAMEORIGIN`
* `X-Content-Type-Options: nosniff`
* `Referrer-Policy: strict-origin-when-cross-origin`
* `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
* `X-Powered-By` removido (`poweredByHeader: false`)

## Dependency Audit

### Resultado do `npm audit`
Encontradas 3 vulnerabilidades de severidade *high*:
- **postcss <=8.5.22**: XSS e leitura de arquivo arbitrário.
- **sharp <0.35.0**: Vulnerabilidades herdadas da libvips.
Recomendação: Ambas as dependências vêm do `next`. A correção requer o update para o Next.js v16.x (`npm audit fix --force`), o que é uma breaking change e exige um teste completo do app.

### Resultado do `npm outdated`
Pacotes desatualizados encontrados:
- `@types/node`: 22.20.1 -> 26.2.0
- `eslint`: 9.39.5 -> 10.8.1
- `eslint-config-next`: 15.5.23 -> 16.3.0
- `next`: 15.5.23 -> 16.3.0
- `typescript`: 5.9.3 -> 7.0.2

*Recomendação:* Atualizar com cuidado devido às major versions (ex: next 15 para 16). Update seguro imediato não aplicável sem refatoração considerável.

## Content-Security-Policy (CSP)
**Status: MANUAL REQUIRED**
O aplicativo utiliza `dangerouslySetInnerHTML` para JSON-LD e carrega o VLibras a partir de um script externo (vlibras.gov.br). Uma CSP rigorosa bloquearia esses recursos caso não seja devidamente configurada. A implementação exige análise detalhada dos domínios em produção, nonces para scripts inline e hashes ou URLs exatas em `script-src`.

## HSTS (Strict-Transport-Security)
**Status: BLOCKED**
A implementação de HSTS no nível do Next.js `headers()` não é recomendada ou garantida se a aplicação for distribuída via CDN/Proxy. A configuração correta deve ser feita na infraestrutura (Vercel, Cloudflare, Nginx, AWS CloudFront, etc).

## Source Maps
**Status: PASS**
O Next.js não expõe source maps em production build (`next build`) por padrão, garantindo a proteção do código fonte da aplicação final.
