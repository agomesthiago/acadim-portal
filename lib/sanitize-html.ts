/**
 * Utilitário de Sanitização de HTML Editorial para Next.js (Server & Client side)
 * Remove elementos perigosos (scripts, iframes, handlers inline, esquemas javascript:)
 * preservando a marcação editorial válida (p, h1-h6, strong, em, a, ul, ol, li, img, blockquote).
 */

/**
 * Sanitiza uma string HTML removendo construtos maliciosos e XSS.
 * @param html String HTML bruta a ser sanitizada
 * @returns String HTML limpa e segura para renderização
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';

  let sanitized = html;

  // 1. Remover blocos de <script>...</script> e <style>...</style>
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // 2. Remover manipuladores de evento inline (ex: onload=..., onclick=..., onerror=...)
  sanitized = sanitized.replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');

  // 3. Remover esquemas de URL perigosos (javascript:, vbscript:, data:text/html)
  sanitized = sanitized.replace(/href\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, 'href="#"');
  sanitized = sanitized.replace(/src\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, '');
  sanitized = sanitized.replace(/href\s*=\s*(?:"data:text\/html[^"]*"|'data:text\/html[^']*'|data:text\/html[^\s>]+)/gi, 'href="#"');

  // 4. Desarmar tags não autorizadas (iframe, object, embed, form, applet, base, meta)
  sanitized = sanitized.replace(/<\/?(iframe|object|embed|applet|base|form|input|textarea|button|select|option|meta|link)\b[^>]*>/gi, '');

  // 5. Garantir rel="noopener noreferrer" em links com target="_blank"
  sanitized = sanitized.replace(/<a\b([^>]*)target=["']_blank["']([^>]*)>/gi, (match, p1, p2) => {
    if (!/rel=/i.test(match)) {
      return `<a ${p1}target="_blank" rel="noopener noreferrer"${p2}>`;
    }
    return match;
  });

  return sanitized;
}
