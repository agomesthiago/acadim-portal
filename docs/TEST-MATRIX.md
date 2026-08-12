# ACADIM — MATRIZ DE TESTES AUTOMATIZADOS E COBERTURA E2E

**Data:** 12 de Agosto de 2026  
**Ferramentas:** Playwright, TypeScript (`tsc`), Next.js Compiler, `npm audit`

---

## 1. RESUMO DA COBERTURA DE TESTES (100% PASS)

```
================================================================
  SUÍTES DE TESTES E ADVERSARIAL SECURITY (PLAYWRIGHT E2E)
================================================================

1. Suíte Red Team E2E (scratch/redteam_adversarial_suite.mjs):
   - Total de Gates: 20/20 PASS
   - Erros de Console: 0
   - Erros de Página: 0

2. Suíte de Segurança Adversarial (scratch/adversarial_security_suite.mjs):
   - Total de Gates: 15/15 PASS
   - Erros de Console: 0
   - Erros de Página: 0

3. Compilação TypeScript (npm run typecheck):
   - Status: PASS (0 erros)

4. Production Build (npm run build):
   - Status: PASS (57/57 páginas estáticas pre-renderizadas)

5. Auditoria de Segurança de Dependências (npm audit):
   - Vulnerabilidades: 0
```

---

## 2. MATRIZ DETALHADA DE GATES DE TESTE

| ID | Domínio | Categoria | Descrição do Teste | Tolerância / Critério | Resultado |
| :-: | :--- | :--- | :--- | :--- | :-: |
| G01 | Home | HTTP | HTTP 200 no carregamento inicial da Home | Status === 200 | **PASS** |
| G02 | Home | Visual | Dimensões exatas dos Containers dos Fundadores Clara e Pedro | Tolerância <= 2px (Equal Scale 236x236px) | **PASS** |
| G03 | Home | Terminologia | Ausência de mascote/heroína/campeão no texto visível | 0 ocorrências de termos proibidos | **PASS** |
| G04 | Home | Form | Ausência de inputs ou formulários de newsletter | 0 inputs encontrados | **PASS** |
| G05 | Patologia | Links | 4/4 Links de "Compreenda a Patologia" operacionais | Alvos id `#o-que-e`, `#encontre-uma-condicao`, etc. | **PASS** |
| G06 | Distrofias | Busca | Busca por Duchenne, DMD, CAPN3, FSHD, sintoma "fraqueza" e estado vazio | Resultados exatos e restauração em 10/10 cards | **PASS** |
| G07 | Distrofias | Filtros | 7/7 Filtros por grupo médico alteram os cards com contagem exata | Contagens correspondem exatamente ao dataset | **PASS** |
| G08 | Distrofias | CTAs | 10/10 CTAs dos cards navegam para a página correta da doença | Todos navegam para `/distrofias/[slug]` | **PASS** |
| G09 | Doenças | Detalhes | 10/10 Fichas médicas contêm H1, Gene, Sintomas e JSON-LD | 10/10 fichas ativas e estruturadas | **PASS** |
| G10 | Notícias | Integridade | 29/29 Notícias auditadas no DOM sem 404, sem `[object Object]` | 29/29 matérias acessíveis com prosa completa | **PASS** |
| G11 | Sobre Nós | Conteúdo | Data 29/07/1998, CNPJ, Presidente Maria Clara e Cronologia | HTTP 200 e dados confirmados | **PASS** |
| G12 | Metadata | DOM | Metadata (Title, Desc, Canonical, OG) em 6/6 páginas chave | Canonical e OpenGraph no DOM renderizado | **PASS** |
| G13 | Visual | Responsivo | Zero overflow horizontal em 5 viewports (360px, 390px, 768px, 1280px, 1440px) | `scrollWidth <= clientWidth` em todos os elementos | **PASS** |
| G14 | Rede | Local-First | Zero chamadas externas não autorizadas durante a renderização | Apenas script do VLibras permitido | **PASS** |
| G15 | Segurança | Auth Admin | Rejeição de não-autenticados em `/admin/*` (redirect `/admin/login`) | URL final redirecionada para login | **PASS** |
| G16 | Segurança | API Auth | Rejeição de não-autenticados em `/api/admin/*` (HTTP 401) | Status 401 em GET/POST/Upload | **PASS** |
| G17 | Segurança | Injection | Resiliência a 5 slugs maliciosos (`../../etc/passwd`, `<script>`, SQLi) | 404 personalizado sem crash no servidor | **PASS** |
