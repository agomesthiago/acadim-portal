import { test, expect, Page } from '@playwright/test';

async function loginAsAdmin(page: Page) {
  const context = page.context();
  await context.addCookies([
    {
      name: 'acadim_admin_token',
      value: '123@abc',
      url: 'http://localhost:3000',
    },
  ]);
  await page.goto('/admin/login');
  await page.waitForLoadState('domcontentloaded');
  if (await page.locator('input[type="password"]').isVisible()) {
    await page.fill('input[type="password"]', '123@abc');
    await page.click('button[type="submit"]');
    await page.waitForURL((url) => !url.href.includes('/admin/login'), { timeout: 10000 });
  }
}

test.describe('RELEASE CANDIDATE — CERTIFICAÇÃO FINAL COMPLETA', () => {

  test('1. API AUTH SECURITY — Retorna 401 para requisições não autenticadas', async ({ request }) => {
    const getRes = await request.get('/api/admin/noticias');
    expect(getRes.status()).toBe(401);

    const postRes = await request.post('/api/admin/noticias', { data: { title: 'Hack' } });
    expect(postRes.status()).toBe(401);

    const putRes = await request.put('/api/admin/noticias/fake-id', { data: { title: 'Hack' } });
    expect(putRes.status()).toBe(401);

    const delRes = await request.delete('/api/admin/noticias/fake-id');
    expect(delRes.status()).toBe(401);
  });

  test('2. UPDATE_WITHOUT_REBUILD — Atualização em tempo real sem restart ou rebuild', async ({ page }) => {
    const timestamp = Date.now();
    const origTitle = `[RC UPDATE] Notícia para Teste Sem Rebuild ${timestamp}`;
    const newTitle = `[RC EDITED] Notícia Editada Sem Rebuild ${timestamp}`;

    await loginAsAdmin(page);
    await page.goto('/admin/noticias/nova');
    await page.fill('#news-title', origTitle);
    await page.fill('#news-summary', 'Resumo de teste sem rebuild');
    await page.locator('.w-md-editor textarea, #news-content').first().fill('Conteúdo inicial');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    await page.goto('/admin/noticias');
    await page.waitForLoadState('networkidle');
    const editBtn = page.locator(`tr:has-text("${origTitle}") a[title="Editar Notícia"]`).first();
    await editBtn.click();
    await page.fill('#news-title', newTitle);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia atualizada com sucesso!')).toBeVisible({ timeout: 10000 });

    await page.goto('/noticias');
    await page.waitForLoadState('networkidle');
    await expect(page.locator(`text=${newTitle}`)).toBeVisible();
    await expect(page.locator(`text=${origTitle}`)).not.toBeVisible();

    await page.goto('/admin/noticias');
    page.on('dialog', (d) => d.accept());
    const deleteBtn = page.locator(`tr:has-text("${newTitle}") button[title="Excluir Notícia"]`).first();
    await deleteBtn.click();
    await expect(page.locator(`tr:has-text("${newTitle}")`)).not.toBeVisible({ timeout: 10000 });
  });

  test('3. XSS SANITIZATION — Conteúdo malicioso é desarmado com segurança', async ({ page }) => {
    const timestamp = Date.now();
    const xssTitle = `[RC XSS TEST] Notícia Sanitizada ${timestamp}`;
    const xssContent = `<script>window.__XSS_TRIGGERED__=true;</script><img src="x" onerror="window.__XSS_TRIGGERED__=true;" />Texto seguro da matéria.`;

    await loginAsAdmin(page);
    await page.goto('/admin/noticias/nova');
    await page.fill('#news-title', xssTitle);
    await page.fill('#news-summary', 'Teste XSS');
    await page.locator('.w-md-editor textarea, #news-content').first().fill(xssContent);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Notícia cadastrada e salva com sucesso!')).toBeVisible({ timeout: 10000 });

    await page.goto('/noticias');
    await page.click(`a[aria-label="Ler matéria completa: ${xssTitle}"]`);
    await page.waitForLoadState('networkidle');

    const xssTriggered = await page.evaluate(() => (window as any).__XSS_TRIGGERED__);
    expect(xssTriggered).toBeUndefined();

    await page.goto('/admin/noticias');
    page.on('dialog', (d) => d.accept());
    await page.locator(`tr:has-text("${xssTitle}") button[title="Excluir Notícia"]`).first().click();
  });

  test('4. FAVICON & ASSETS — Favicon.ico responde 200 OK sem erros de console', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    const response = await page.goto('/favicon.ico');
    expect(response?.status()).toBe(200);

    const hasFavicon404 = errors.some((e) => e.includes('favicon.ico 404'));
    expect(hasFavicon404).toBe(false);
  });

  test('5. FUNDADORES CONTAINERS & FORBIDDEN TERMS — Clara e Pedro com 236x236px e zero termos proibidos', async ({ page }) => {
    await page.goto('/sobre-nos');
    await page.waitForLoadState('networkidle');

    const claraContainer = page.locator('#clara-container div').filter({ has: page.locator('img') }).first();
    const pedroContainer = page.locator('#pedro-container div').filter({ has: page.locator('img') }).first();

    const claraBox = await claraContainer.boundingBox();
    const pedroBox = await pedroContainer.boundingBox();

    if (claraBox && pedroBox) {
      expect(Math.abs(claraBox.width - 236)).toBeLessThanOrEqual(1.5);
      expect(Math.abs(claraBox.height - 236)).toBeLessThanOrEqual(1.5);
      expect(Math.abs(pedroBox.width - 236)).toBeLessThanOrEqual(1.5);
      expect(Math.abs(pedroBox.height - 236)).toBeLessThanOrEqual(1.5);
    }

    const bodyText = await page.locator('body').innerText();
    const forbiddenRegex = /\b(mascote|mascotes|heroína|campeão)\b/i;
    expect(forbiddenRegex.test(bodyText)).toBe(false);
  });

  test('6. SEARCH & FILTERS ON ENCYCLOPEDIA /DISTROFIAS — Busca por termos chaves', async ({ page }) => {
    await page.goto('/distrofias');
    await page.waitForLoadState('networkidle');

    const terms = ['DMD', 'Duchenne', 'CAPN3', 'LGMD', 'G71.0', 'criança', 'coração'];

    for (const term of terms) {
      await page.fill('#distrofia-search', term);
      await page.waitForTimeout(100);
      const cardsCount = await page.locator('.grid > div, .grid > article, a[href^="/distrofias/"]').count();
      expect(cardsCount).toBeGreaterThan(0);
    }
  });

  test('7. MULTI-VIEWPORT ACCESSIBILITY — Sem transbordamento ou erros em múltiplos viewports', async ({ page }) => {
    test.setTimeout(60000);
    const viewports = [
      { width: 360, height: 800 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalScroll).toBe(false);
    }
  });

  test('8. HOME — FUNDADORES REMOVIDOS — Seção removida da Home e mantida em /sobre-nos', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const homeBody = await page.locator('body').innerText();
    expect(homeBody.includes('Nossos Fundadores')).toBe(false);

    const fundadoresAnchor = await page.locator('#fundadores').count();
    expect(fundadoresAnchor).toBe(0);

    await page.goto('/sobre-nos');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#clara-container')).toBeVisible();
    await expect(page.locator('#pedro-container')).toBeVisible();
  });

  test('9. ABOUT PAGE — HELP NAVIGATION — Como podemos ajudar com 4 caminhos funcionais', async ({ page, request }) => {
    const res = await page.goto('/sobre-nos');
    expect(res?.status()).toBe(200);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Como podemos ajudar?')).toBeVisible();

    const expectedHrefs = [
      '/distrofias#o-que-e',
      '/distrofias#encontre-uma-condicao',
      '/distrofias/duchenne#sintomas',
      '/noticias/direitos-sus-medicamentos-orteses-guia',
    ];

    for (const href of expectedHrefs) {
      const link = page.locator(`a[href="${href}"]`).first();
      await expect(link).toBeVisible();

      const rawUrl = href.split('#')[0];
      const targetRes = await request.get(rawUrl);
      expect(targetRes.status()).toBe(200);
    }

    const viewports = [
      { width: 360, height: 800 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow).toBe(false);
    }
  });

});
