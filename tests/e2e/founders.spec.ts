import { test, expect } from '@playwright/test';

test.describe('E2E Fundadores Clara e Pedro - Dimensões dos Containers', () => {
  test('Containers de Clara e Pedro possuem exatamente a mesma dimensão (236px x 236px)', async ({ page }) => {
    await page.goto('/sobre-nos');
    await page.waitForLoadState('networkidle');

    // Localiza os containers das imagens dos fundadores Clara e Pedro
    const claraContainer = page.locator('#clara-container .relative.w-\\[236px\\]').first();
    const pedroContainer = page.locator('#pedro-container .relative.w-\\[236px\\]').first();

    await expect(claraContainer).toBeVisible();
    await expect(pedroContainer).toBeVisible();

    const claraBox = await claraContainer.boundingBox();
    const pedroBox = await pedroContainer.boundingBox();

    expect(claraBox).not.toBeNull();
    expect(pedroBox).not.toBeNull();

    if (claraBox && pedroBox) {
      // Assert: Tolerância máxima de 1px entre a largura de Clara e Pedro
      expect(Math.abs(claraBox.width - pedroBox.width)).toBeLessThanOrEqual(1);
      // Assert: Tolerância máxima de 1px entre a altura de Clara e Pedro
      expect(Math.abs(claraBox.height - pedroBox.height)).toBeLessThanOrEqual(1);

      // Assert: Dimensões exatas de 236px
      expect(Math.abs(claraBox.width - 236)).toBeLessThanOrEqual(1);
      expect(Math.abs(claraBox.height - 236)).toBeLessThanOrEqual(1);
      expect(Math.abs(pedroBox.width - 236)).toBeLessThanOrEqual(1);
      expect(Math.abs(pedroBox.height - 236)).toBeLessThanOrEqual(1);
    }
  });
});
