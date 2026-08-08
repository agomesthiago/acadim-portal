# PLAN-wcag3-mobile-security: Antecipação WCAG 3.0, Rigor Mobile & Segurança XSS

## 🎯 Objetivo
Estruturar o plano de antecipação do **W3C WCAG 3.0 (Guidelines de Próxima Geração)**, combinando **Rigor de Engenharia Mobile-First**, **Segurança contra XSS na renderização de notícias** e a **Implementação do Botão de Reset** para o projeto da ACADIM.

---

## 🔮 Antecipação WCAG 3.0 (W3C Guidelines - Next Gen)

Diferente do modelo binário de aprovação/reprovação do WCAG 2.2, o **WCAG 3.0** introduz uma escala contínua de pontuação (**Bronze, Prata, Ouro**). Antecipamos os seguintes pilares:

### 1. Algoritmo APCA (Advanced Perceptual Contrast Algorithm)
- Substitui a fórmula simplista 7:1 por cálculo perceptivo de luminância dependente do peso e tamanho do texto.
- **Implementação:** Garantimos valor Lc 90+ (contraste perceptual máximo) nos textos normais e Lc 75+ em subtítulos.

### 2. Rigor de Ergonometria Mobile-First & Touch (Target Size > 48px)
- Área de toque mínima expandida para **48px x 48px** com espaçamento seguro de 8px entre botões em dispositivos móveis, evitando cliques acidentais em leitores de tela e por pessoas com tremores neuromusculares.

### 3. Carga Cognitiva & Saúde Mental (Cognitive Accessibility)
- Linguagem direta, estruturas previsíveis, ausência de contadores regressivos ansiosos ou pop-ups intrusivos.
- **Botão de Reset:** Função universal que permite ao usuário retornar a interface ao estado neutro inicial em 1 clique.

---

## 🛡️ Segurança Frontend & Prevenção de XSS

Na exibição de artigos de notícias e formulários, implementamos sanitização rigorosa contra **Cross-Site Scripting (XSS)**:
- **Sanitização de HTML:** Uso de bibliotecas de sanitização (ex: `DOMPurify` / sanitização de atributos) antes de renderizar HTML em `dangerouslySetInnerHTML`.
- **Cabeçalhos CSP (Content Security Policy):** Restrição de scripts externos apenas a domínios confiáveis (`vlibras.gov.br`, `google.com`).
- **Validação e Escape de Inputs:** Todos os formulários de cadastro e newsletter são validados no cliente e higienizados contra injeções.

---

## 📋 Lista de Tarefas (Checklist Atômica)

### Fase 1: Resolução de Cache & Reset de Acessibilidade
- [x] Limpar cache do Next.js `.next` e resolver erro de runtime `Cannot find module './611.js'`
- [x] Implementar a função `resetAll()` em `AccessibilityContext.tsx`
- [x] Adicionar o botão **"Restaurar Padrões"** no menu flutuante `AccessibilityToolbar.tsx`

### Fase 2: Rigor Mobile-First & Sanitização XSS
- [ ] Adicionar sanitizador de HTML para o conteúdo dos artigos de notícias em `/noticias/[slug]`
- [ ] Garantir alvos de toque ≥ 48px em botões móveis do Header e Footer
- [ ] Testar compatibilidade de toque em telas estreitas (320px – 480px)

---

## 🧪 Plano de Verificação

1. **Build & Compilação:** Executar `npm run build` garantindo zero erros de modulo ou TypeScript.
2. **Mobile Touch Audit:** Testar em emulador Chrome DevTools com viewport iPhone SE (375px) e Galaxy S20 (360px).
3. **XSS Security Verification:** Injetar tags `<script>alert(1)</script>` no payload de notícia para atestar que o script é bloqueado.
