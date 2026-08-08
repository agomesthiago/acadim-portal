# Certificação de Acessibilidade WCAG 2.2 AA

| Critério WCAG 2.2 | Item | Resultado | Evidência | Limitação |
|---|---|---|---|---|
| 3.1.1 Language | lang=pt-BR | PASS | `app/layout.tsx` (linha 50) define `<html lang="pt-BR">` | |
| 2.4.2 Page Titled | title por rota | PASS | `app/layout.tsx` possui metadata genérica definida | |
| 1.3.1 Info & Relationships | landmarks | PASS | Uso correto de `<header>`, `<main>`, `<section>`, `<nav>` com `aria-label` apropriado. | |
| 2.4.6 Headings & Labels | H1 único | PASS | `components/HeroSection.tsx` contém `<h1 className="...">` | |
| 2.4.1 Bypass Blocks | skip link | PASS | `SkipLink.tsx` ancorado ao id `#main-content`, que foi adicionado na `<main>` em `app/page.tsx` | |
| 2.1.1 Keyboard | navegação completa | MANUAL REQUIRED | Testes interativos parcialmente validados (FAQ, PixModal), requer verificação manual extensiva | Faltam testes e2e para fluxo inteiro apenas com tabulação |
| 2.1.2 No Keyboard Trap | focus trap modal | PASS | Implementação nativa via `handleKeyDown` em `components/PixModal.tsx` | |
| 2.4.7 Focus Visible | estilos de focus | PASS | Diretiva `*:focus-visible` em `app/globals.css` (offset de 3px, contraste adequado) | |
| 2.5.8 Target Size | 44px targets | FAIL | Audit mostrou 74 componentes abaixo de 44px (min-h aplicado, mas pode haver flex issues ou âncoras internas não redimensionadas) | A refatoração do layout seria necessária para corrigir os botões secundários e ícones. |
| 4.1.2 Name, Role, Value | aria | PASS | `<nav aria-label="...">`, `<button aria-expanded="...">` e roles `dialog` estão corretas. | |
| 1.1.1 Non-text Content | alt text | PASS | `next/image` exige e utiliza `alt`, imagens de hero e mascotes avaliadas possuem. | |
| 1.4.3 Contrast | cores | MANUAL REQUIRED | Não analisado de forma algorítmica. O High-Contrast theme cumpre teoricamente. | Requer ferramenta de contraste sobre cores base e de fonte. |
| Screen reader | NVDA/VoiceOver | MANUAL REQUIRED | — | Requer hardware/software real e testes práticos com navegação estruturada. |
