# Matriz de QA (QA Runtime & Visual Regression)

## Testes Existentes (QA Runtime - test_qa_hardened.mjs)
- **Ordem das seções:** `AUTOMATED PASS` (Verificação efetiva de posY no DOM).
- **Âncoras do HeaderNav:** `AUTOMATED PASS` (Verificação de array, presença das hrefs).
- **Navegação para #bazar:** `AUTOMATED PASS` (Verificação de rolagem e interseção de viewport real).
- **Textos Mascotes / Serviços / Dual Target:** `AUTOMATED PASS` (Verificação literal de innerText, assertiva passiva).
- **Interatividade FAQ (Mouse + Teclado):** `AUTOMATED PASS` (Verificação ativa de `aria-expanded` com clique e `Enter`, simulando comportamento real).
- **Cópia PIX (Feedback Visual):** `AUTOMATED PASS` (Verificação do estado interno `Copiado!` pós clique).

### Falsos Positivos Identificados
- Nenhum falso positivo grotesco foi encontrado, os testes interativos realmente focam, clicam e emulam teclado. 
- *Falta Abrangência*: Não existem testes fim-a-fim cobrindo um usuário acessando LIBRAS, navegando via menu móvel em `< 768px`, ou preenchendo um formulário.

## Regressão Visual e Responsividade
**27 Cenários (9 Viewports × 3 Temas):**
- **Viewports testados:** 320px, 360px, 375px, 390px, 412px, 480px, 768px, 1024px, 1280px.
- **Temas testados:** Light, Dark, High-Contrast.
- **Método de verificação automatizada:** Verificou-se `scrollWidth > clientWidth` para garantir 0 overflow horizontal (`AUTOMATED PASS`).
- **Análise dos Screenshots (O Bug Identificado):**
  - **FALHA ENCONTRADA:** Os screenshots estavam gerando arquivos de tamanho de byte **exatamente idênticos** entre os temas.
  - **Causa:** O CSS Tailwind v4 não reconhece classes css puras escritas fora de `@layer` no arquivo `globals.css`, portanto, as definições de tema Dark e High Contrast foram totalmente dropadas no build/runtime. O teste injetava `data-theme` no HTML, mas sem o CSS correspondente o visual da página nunca mudava.
  - **Correção:** As declarações customizadas em `globals.css` foram repassadas para o escopo de `@layer base`, `@layer components` e `@layer utilities`. A aplicação efetiva do tema foi restaurada.

## Plano de Expansão
1. **Verificação Visual Pixel-Perfect:** Adicionar `expect(page).toHaveScreenshot()` utilizando referências visuais atualizadas.
2. **End-to-End Keyboad Navigation:** Script dedicado tabulando da âncora principal até o rodapé e garantindo o foco correto.
3. **Formulário / Contato:** Testes de preenchimento e validação de `aria-invalid`.

## Status Final QA
- Funcionalidade e Estrutura Básica: `AUTOMATED PASS`
- Regressão de Overflow: `AUTOMATED PASS`
- Acessibilidade e Leitor de Tela (NVDA/VoiceOver): `MANUAL REQUIRED`
- Verificações complexas de cor (Contraste): `MANUAL REQUIRED`
