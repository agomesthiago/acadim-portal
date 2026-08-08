# PLAN-acadim-landing.md

## Projeto Website ACADIM - Single Page (Vanilla HTML5 / CSS3 / TS - Awwwards Style)

### Resumo Executivo
Desenvolvimento do site institucional da **ACADIM (Associação Carioca de Distrofia Muscular)** no formato **Vanilla Single Page (HTML5 + CSS3 + JS/TS)**, focado em alta performance, leveza, design estilo Awwwards, interatividade e acessibilidade total (WCAG 2.1 AA+).

---

## 1. Estrutura das 8 Seções Fullscreen (`100vh`)
0. **Hero (`#hero`):** Tag institucional, headline de alto impacto (*"Ninguém enfrenta a distrofia sozinho."*), subtítulo, CTAs "Quero Ajudar" e "Conheça a ACADIM", efeito de fundo atmosférico e indicador de scroll.
1. **Quem Somos (`#sobre`):** Apresentação da missão no Rio de Janeiro e filiação à Aliança Distrofia Brasil, grid com 3 pilares em cards (Acolhimento, Informação, Advocacy).
2. **O que é Distrofia (`#distrofia`):** 4 cartões com barras de progresso animadas (Duchenne, Becker, FSHD, Congênitas) e modais de leitura aprofundada.
3. **Nosso Impacto (`#impacto`):** Grid de 6 métricas com animação numérica incremental (1.200+ famílias, 48 eventos, 15 anos, R$ 3,2M, 8 trials, 100% transparência).
4. **Como Ajudar (`#ajudar`):** 4 cartões de ação (Doação PIX com modal e botão copiar chave, Voluntariado com formulário, Parcerias Empresas, Guia Imposto de Renda).
5. **Histórias (`#historias`):** Depoimentos reais de mães, pacientes e médicos parceiros em formato de citações destacadas.
6. **Design System (`#design-system`):** Documentação visual da marca ACADIM, mostruário de cores, tipografia e diretrizes de acessibilidade.
7. **Contato / Footer (`#contato`):** Formulário de Newsletter com validação, marcas parceiras (ADB, MDA, Duchenne UK), redes sociais, CNPJ e contatos no RJ.

---

## 2. Palette & Tokens CSS
- **Preto Profundo:** `#0A0A0A`
- **Off-white Quente:** `#F5F0EB`
- **Ouro Terroso:** `#C4A882`
- **Cinza Azulado:** `#6B7B8C`

---

## 3. Checklist de Arquivos
- [x] `package.json` limpo para Vite Vanilla
- [ ] `index.html` semântico com as 8 seções, modais e acessibilidade
- [ ] `src/styles/main.css` com Design System, cores, layout responsivo e animações
- [ ] `src/scripts/main.ts` com gerenciador de scroll, observers, contadores, modais e formulários
