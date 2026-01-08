import { test, expect } from '@playwright/test';

test.describe('Automation Practice Form - DemoQA', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  // ✅ Caso 1: Envío exitoso
  test('Enviar formulario con datos válidos', async ({ page }) => {
    await page.fill('#firstName', 'Ariel');
    await page.fill('#lastName', 'Hernandez');
    await page.fill('#userEmail', 'ar19@gmail.com');
    await page.fill('#userNumber', '8092525522');
    await page.click('label[for="gender-radio-1"]'); // Male

    await page.click('#submit');

    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('#example-modal-sizes-title-lg'))
      .toHaveText('Thanks for submitting the form');
  });

  // ❌ Caso 2: Campos obligatorios vacíos
  test('No permitir envío con campos obligatorios vacíos', async ({ page }) => {
    await page.click('#submit');

    await expect(
      page.locator('#example-modal-sizes-title-lg')
    ).toHaveCount(0);
  });

  // ❌ Caso 3: Email inválido
  test('Validar formato inválido de email', async ({ page }) => {
    await page.fill('#firstName', 'Ariel');
    await page.fill('#lastName', 'Hernandez');
    await page.fill('#userEmail', 'correo-invalido');
    await page.click('label[for="gender-radio-1"]'); // Female
    await page.fill('#userNumber', '8092525522');

    await page.click('#submit');

    await expect(
      page.locator('#example-modal-sizes-title-lg')
    ).toHaveCount(0);
  });

  // ✅ Caso 4: Género y hobbies
  test('Seleccionar género y hobbies correctamente', async ({ page }) => {
    
    await page.fill('#firstName', 'Ariel');
    await page.fill('#lastName', 'Hernandez');
    await page.click('label[for="gender-radio-1"]'); // male

    await page.click('label[for="hobbies-checkbox-1"]'); // Sports
    await page.click('label[for="hobbies-checkbox-2"]'); // Reading
    await page.click('label[for="hobbies-checkbox-3"]'); // Music

    await page.fill('#userNumber', '1234567890');
    await page.click('#submit');

    await expect(page.locator('.modal-content')).toBeVisible();
  });

  // 📎 Caso 5: Cargar archivo
  test('Cargar archivo y enviar formulario', async ({ page }) => {
    await page.fill('#firstName', 'Ariel');
    await page.fill('#lastName', 'Hernandez');
    await page.fill('#userEmail', 'lar19@gmail.com');
    await page.click('label[for="gender-radio-1"]');
    await page.fill('#userNumber', '8092525522');

    await page.setInputFiles(
      '#uploadPicture',
      'tests/fixtures/test.png'
    );

    await page.click('#submit');

    await expect(page.locator('.modal-content')).toBeVisible();
  });

});
