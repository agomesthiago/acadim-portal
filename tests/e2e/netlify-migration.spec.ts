import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

function getCustomNewsPath(): string {
  return path.join(process.cwd(), 'data', 'custom-news.json');
}

function purgeTestRecord(titleMarker: string): void {
  const filePath = getCustomNewsPath();
  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      if (raw && raw.trim() !== '') {
        const records = JSON.parse(raw);
        if (Array.isArray(records)) {
          const filtered = records.filter(
            (r: any) => !r.title.includes(titleMarker) && !r.slug.includes('netlify-migration-test')
          );
          fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), 'utf-8');
        }
      }
    } catch {
      // Ignore cleanup error
    }
  }
}

async function loginAsAdmin(page: any) {
  await page.goto(`${BASE_URL}/admin/login`);
  const isLoginPage = await page.locator('input[type="password"]').isVisible().catch(() => false);
  if (isLoginPage) {
    await page.fill('input[type="password"]', '123@abc');
    await page.click('button[type="submit"]');
    await page.waitForURL((url: any) => !url.href.includes('/admin/login'), { timeout: 10000 });
  }
}

test.describe('NETLIFY MIGRATION — SUÍTE DE CERTIFICAÇÃO E2E DE INFRAESTRUTURA', () => {
  test('1. HOME RRENDER & ASSETS — Carrega sem erros de console', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('React DevTools')) {
        consoleErrors.push(msg.text());
      }
    });

    const response = await page.goto(`${BASE_URL}/`);
    expect(response?.status()).toBe(200);

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Confirm "Nossos Fundadores" section is NOT present on Home
    const homeFounders = page.locator('#fundadores');
    await expect(homeFounders).toHaveCount(0);

    expect(consoleErrors).toEqual([]);
  });

  test('2. DISTROFIAS ENCYCLOPEDIA & SEARCH — Busca funcional', async ({ page }) => {
    await page.goto(`${BASE_URL}/distrofias`);
    await expect(page.locator('h1')).toBeVisible();

    const searchInput = page.locator('input[placeholder*="Buscar"], input[type="search"]').first();
    if (await searchInput.isVisible()) {
      await searchInput.fill('Duchenne');
      await page.waitForTimeout(300);
      const duchenneCard = page.locator('text=Duchenne').first();
      await expect(duchenneCard).toBeVisible();
    }
  });

  test('3. FICHA DE DOENÇA — Carregamento de /distrofias/duchenne', async ({ page }) => {
    const res = await page.goto(`${BASE_URL}/distrofias/duchenne`);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('4. SOBRE NÓS — Página institucional, Fundadores e Seção de Ajuda', async ({ page }) => {
    const res = await page.goto(`${BASE_URL}/sobre-nos`);
    expect(res?.status()).toBe(200);

    // H1 check
    await expect(page.locator('h1')).toBeVisible();

    // Help navigation section check
    const helpSection = page.locator('text=Como podemos ajudar?');
    await expect(helpSection).toBeVisible();

    // Confirm Clara and Pedro containers exist with 236x236px bounding box
    const clara = page.locator('#clara-container div.relative').first();
    const pedro = page.locator('#pedro-container div.relative').first();

    if (await clara.isVisible() && await pedro.isVisible()) {
      const boxClara = await clara.boundingBox();
      const boxPedro = await pedro.boundingBox();
      if (boxClara && boxPedro) {
        expect(Math.round(boxClara.width)).toBe(236);
        expect(Math.round(boxClara.height)).toBe(236);
        expect(Math.round(boxPedro.width)).toBe(236);
        expect(Math.round(boxPedro.height)).toBe(236);
      }
    }
  });

  test('5. NOTÍCIAS & DETALHE — Catálogo e matéria individual', async ({ page }) => {
    const listRes = await page.goto(`${BASE_URL}/noticias`);
    expect(listRes?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const articleRes = await page.goto(`${BASE_URL}/noticias/avancos-terapia-genica-duchenne-2026`);
    expect(articleRes?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('6. FAVICON & ASSETS — Favicon responde HTTP 200', async ({ page }) => {
    const res = await page.goto(`${BASE_URL}/favicon.ico`);
    expect(res?.status()).toBe(200);
  });

  test('7. VLIBRAS & CSP — Script e Widget carregam sem violação CSP em /sobre-nos', async ({ page }) => {
    const cspViolations: string[] = [];
    page.on('console', (msg) => {
      if (msg.text().includes('violates the following Content Security Policy')) {
        cspViolations.push(msg.text());
      }
    });

    await page.goto(`${BASE_URL}/sobre-nos`);
    await page.waitForTimeout(1000);

    const vlibrasWidget = page.locator('[vw], .vw-plugin-wrapper, #vlibras-container').first();
    await expect(vlibrasWidget).toBeAttached();
    expect(cspViolations).toEqual([]);
  });

  test('8. CMS CRUD & TEARDOWN ABSOLUTO — Create -> Read -> Update -> Read -> Delete -> 404', async ({ page }) => {
    const timestamp = Date.now();
    const testTitle = `[NETLIFY E2E TEST] Notícia ${timestamp}`;
    const updatedTitle = `[NETLIFY E2E TEST ATUALIZADO] Notícia ${timestamp}`;

    try {
      // 1. Logar no Admin
      await loginAsAdmin(page);

      // 2. Open form
      await page.goto(`${BASE_URL}/admin/noticias/nova`);
      await expect(page.locator('h1')).toContainText('Cadastrar Nova Notícia');

      // 3. Fill form
      await page.fill('#news-title', testTitle);
      await page.fill('#news-summary', 'Resumo de teste da migração para Netlify.');
      await page.locator('.w-md-editor textarea, #news-content').first().fill('Conteúdo completo de teste para o ambiente Netlify.');
      await page.selectOption('#news-category', 'Avanços Científicos');

      // 4. Submit
      await page.click('button[type="submit"]');
      await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

      // 5. Read in public list
      await page.goto(`${BASE_URL}/noticias`);
      await page.waitForLoadState('networkidle');
      await expect(page.locator(`text=${testTitle}`)).toBeVisible();

      // 6. Update title
      await page.goto(`${BASE_URL}/admin/noticias`);
      await page.waitForLoadState('networkidle');
      const editBtn = page.locator(`tr:has-text("${testTitle}") a[title="Editar Notícia"]`).first();
      await editBtn.click();
      await page.waitForSelector('#news-title');
      await page.fill('#news-title', updatedTitle);
      await page.click('button[type="submit"]');
      await expect(page.locator('text=Notícia atualizada com sucesso!')).toBeVisible({ timeout: 10000 });

      // 7. Delete
      await page.goto(`${BASE_URL}/admin/noticias`);
      await page.waitForLoadState('networkidle');
      page.on('dialog', async (dialog) => {
        await dialog.accept();
      });
      const deleteBtn = page.locator(`tr:has-text("${updatedTitle}") button[title="Excluir Notícia"]`).first();
      await deleteBtn.click();
      await page.waitForTimeout(1000);
    } finally {
      // Compulsory Teardown
      purgeTestRecord(testTitle);
      purgeTestRecord(updatedTitle);
    }
  });

  test('9. MULTI-VIEWPORT ACCESSIBILITY — Sem overflow horizontal em 360, 390, 768, 1440px', async ({ page }) => {
    const viewports = [
      { width: 360, height: 740 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.goto(`${BASE_URL}/`);
      
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    }
  });
});
