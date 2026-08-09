# ACADIM — Diretrizes de Animação e Movimento (Motion Guidelines)

> **Princípio Fundamental:** O conteúdo principal NUNCA deve depender de animação ou JavaScript para existir ou ser legível no DOM.

---

## 1. Níveis de Animação

1. **Micro (Duração: 150ms – 200ms)**
   - **Uso**: Hover de botões, foco de campos, feedback visual de cópia PIX, alternância de ícones.
   - **Curva**: `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out).

2. **Small (Duração: 300ms)**
   - **Uso**: Abertura/fechamento do menu drawer mobile, expansão de accordions do FAQ, exibição de modais.
   - **Curva**: `cubic-bezier(0.16, 1, 0.3, 1)` (out-back leve / decelerate).

3. **Medium / Reveal (Duração: 400ms – 500ms)**
   - **Uso**: Entrada suave de elementos durante a rolagem (scroll-reveal via `IntersectionObserver`).
   - **Curva**: `ease-out`.
   - **Deslocamento**: Máximo 16px no eixo Y (sem sobressaltos ou movimentos bruscos).

---

## 2. Acessibilidade e Reduced Motion (`prefers-reduced-motion`)

- Toda e qualquer animação é desativada via CSS quando o usuário ativa o modo de movimento reduzido no sistema ou pela toolbar de acessibilidade da ACADIM (`html[data-reduced-motion="true"]`).
- O CSS global força `animation: none !important` e `transition: none !important`.
