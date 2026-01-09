import{test, expect}from '@playwright/test';

// Caso 1 Envio exitos
test('Enviar formulario con datos validos', async ({ page}) =>{

await page.goto('https://demoqa.com/automation-practice-form');

await page.fill('#firstName', 'Ariel');
await page.fill('#lastName', 'Hernandez');
await page.fill('#userEmail', 'ar15@gmail.com');
await page.click('label[for="gender-radio-1"]'); // Male
await page.fill ('#userNumber' , '8096709302');
await page.fill('#subjectsInput', 'QA Testing');

});

// Caso 2 Validación de campos obligatorios vacíos.
test('Validación de campos obligatorios vacíos.', async ({ page}) =>{

await page.goto('https://demoqa.com/automation-practice-form');

await page.click('#submit');

await expect(page.locator('#example-modal-sizes-title-lg')).toHaveCount(0);

});

// Caso 3 Validación de formato de email
test('Validación de formato de email', async ({ page }) =>{

await page.goto('https://demoqa.com/automation-practice-form');

await page.fill('#firstName', 'Ariel');
await page.fill('#lastName', 'Hernandez');
await page.fill('#userEmail', 'ar15@gmail.com');
await page.click('label[for="gender-radio-1"]'); // Male
await page.fill ('#userNumber' , '8096709302');
await page.fill('#subjectsInput', 'QA Testing');

});

// Caso 4 Selección de género y hobbies.
test('Selección de género y hobbies', async ({ page }) =>{

await page.goto ('https://demoqa.com/automation-practice-form');


await page.click('label[for="gender-radio-1"]'); // Male
 

await page.click('label[for="hobbies-checkbox-1"]'); //Sport
await page.click('label[for="hobbies-checkbox-2"]'); //Reading
await page.click('label[for="hobbies-checkbox-3"]'); //Music


});

// Caso 5 Carga de archivo y envío del formulario.
test('Carga de archivo y envío del formulario.', async ({ page }) =>{

await page.goto('https://demoqa.com/automation-practice-form')

await page.fill('#firstName', 'Ariel');
await page.fill('#lastName', 'Hernandez');
await page.fill('#userEmail', 'ar15@gmail.com');
await page.click('label[for="gender-radio-1"]'); // Male
await page.fill ('#userNumber' , '8096709302');
await page.fill('#subjectsInput', 'QA Testing');

await page.click('#submit');

await expect(page.locator('.modal-content')).toBeVisible();

});
