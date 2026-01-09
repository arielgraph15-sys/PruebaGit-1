import {test, expect} from '@playwright/test';

test('Login exitoso con credenciales validas', async ({ page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]','admin123');
await page.click('button[type="submit"]');


// Validar que se muestre en el Dashboard

await expect(page).toHaveURL(/dashboard/);
await expect(page.locator('h6')).toHaveText('Dashboard');



}); 


test('Login incorrecto con credebciales invalida', async ({ page}) =>{

await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// Ingresar credenciales incorrectas

await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]', '111111');
await page.click('button[type="submit"]');

  // Validar que no se muestra el Dashboard
  await expect(page).not.toHaveURL(/dashboard/);



const errorMessage = page.locator('.oxd-alert-content-text');
await expect(errorMessage).toHaveText('Invalid credentials');


});
