import { test, expect } from '@playwright/test';

test.describe('E2E VLibras - Teste de Acessibilidade em Libras', () => {
  const routes = ['/', '/distrofias', '/noticias', '/sobre-nos', '/alerta-medico'];

  for (const route of routes) {
    test(`VLibras carrega sem erros de CSP em ${route}`, async ({ page }) => {
      const cspErrors: string[] = [];
      const pageErrors: Error[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error' && msg.text().includes('Content Security Policy')) {
          cspErrors.push(msg.text());
        }
      });

      page.on('pageerror', (err) => {
        if (err.message.includes('VLibras') || err.message.includes('CSP')) {
          pageErrors.push(err);
        }
      });

      await page.goto(route);
      await page.waitForLoadState('networkidle');

      // 1. Confirmar ausência de erros de CSP do VLibras
      expect(cspErrors, `Erros de CSP detectados em ${route}: ${cspErrors.join(', ')}`).toHaveLength(0);
      expect(pageErrors, `Exceções não tratadas do VLibras em ${route}`).toHaveLength(0);

      // 2. Confirmar presença dos elementos do container do VLibras no DOM
      const vlibrasContainer = page.locator('[vw].enabled');
      await expect(vlibrasContainer).toBeAttached();

      const accessButton = page.locator('[vw-access-button]');
      await expect(accessButton).toBeAttached();
    });
  }
});
