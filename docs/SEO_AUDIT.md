# ACADIM SEO, GEO & AIO Audit

## Análise de Encoding
O arquivo `app/layout.tsx` foi verificado no disco para sanar a suspeita de falha de encoding (artefatos de terminal exibindo `?`). Foi confirmado que o arquivo está em **UTF-8 nativo** sem corrompimentos. As palavras "Associação", "médica", "famílias" estão perfeitamente legíveis.

## Metadata & Structured Data Tabela

| Rota | Title | Description | Canonical | Open Graph / Twitter | JSON-LD | Status |
|---|---|---|---|---|---|---|
| `/` | Sim | Sim | Sim (metadataBase) | Sim (Completo) | Sim (Organization/NGO) | OK |
| `/distrofias` | - | - | - | - | - | OK (Herda layout) |
| `/distrofias/[slug]` | Sim (Dynamic) | Sim (Dynamic) | - | Sim (Dynamic) | - | Faltam Medical schemas |
| `/noticias` | - | - | - | - | - | OK (Herda layout) |
| `/noticias/[slug]` | Sim (Dynamic) | Sim (Dynamic) | - | Sim (Dynamic) | - | Faltam NewsArticle |
| `/redacao` | Sim | Sim | - | Sim | Sim (AboutPage / Organization) | OK |

*Observações:*
- O `metadataBase` em `app/layout.tsx` está corretamente configurado para `https://acadim.org.br`.
- As rotas dinâmicas carregam metadata mas carecem dos JSON-LDs específicos que poderiam melhorar drásticamente o SEO e a interpretação de IA (AIO).

## Sitemap & Robots
- **Robots.txt:** Configurado via `robots.ts` (`allow: /`, `disallow: /api/, /_next/`). Aponta o sitemap absoluto corretamente.
- **Sitemap.xml:** Gerado via `sitemap.ts`. **As rotas dinâmicas (/distrofias/[slug] e /noticias/[slug]) estão presentes no sitemap** graças à chamada de funções de busca dinâmica (`getAllDiseases()` e `getAllNews()`).

## Recomendações (Action Items)
1. Inserir esquema `MedicalCondition` ou `MedicalWebPage` nas páginas `distrofias/[slug]`.
2. Inserir esquema `NewsArticle` nas páginas `noticias/[slug]`.

## GEO/AIO Status
**MANUAL REQUIRED**: Requer verificação em ferramentas como ChatGPT, Perplexity, Gemini, Claude, entre outros motores generativos, para confirmar se a ACADIM é sugerida ao pesquisar por "ONG Distrofia Muscular Rio de Janeiro" ou "Apoio a pacientes com Duchenne no RJ".
