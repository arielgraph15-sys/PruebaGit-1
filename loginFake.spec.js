import{test,expect} from '@playwright/test';

test('Iniciar sesion con datos validos', async ({ page }) =>{

    //Navegar a la pagina de login
    await page.goto('https://www.saucedemo.com/');

    //Igresar al usuario
    await page.fill('#user-name', 'standard_user');

    //Ingresar Password
    await page.fill('#password', 'secret_sauce');

    //Hacer click al boton de login
    await page.click('#login-button');

    //Verificar resultado esperado
    await expect(page).toHaveURL(/inventory.html/);



});

test('Validar usuario con password invalido', async ({ page }) =>{

    //Ingresar a la pagina de Saucedemon
    await page.goto('https://www.saucedemo.com/');

    //Ingresar Usuario correcto
    await page.fill('#user-name','standard_user');

    //Ingresar password invalido
    await page.fill('#password', '12312321');

    //Hacer clik en el botton de login
    await page.click('#login-button');

    //Verificar resultado esperado
    await expect(page).not.toHaveURL(/inventory.html/);

});

test('Validar que el sistema NO permite iniciar sesión cuando el campo usuario está vacio',
     async ({ page }) =>{

        //Ingresar a la pagina de Saucedemon
    await page.goto('https://www.saucedemo.com/');

        
    await page.fill('#user-name', '');
    await page.fill('#password', 'secret_sauce');     
    await page.click('#login-button');
    
    //Verificar resultado esperado
    await expect(page).not.toHaveURL(/inventory.html/);

    // Validar mensaje de error
    await expect(page.locator('[data-test="error"]')).toBeVisible();

});

test('Validar que el sistema NO permite iniciar sesión cuando el campo password está vacío', 
    async({ page }) =>{

        //Ir a la pagina
        await page.goto('https://www.saucedemo.com/');

        //llenar los Campos requeridos
        await page.fill('#user-name','performance_glitch_user');
        await page.click('#login-button');

        await expect(page).not.toHaveURL(/inventory.html/);

        // Validar mensaje de error
        await expect(page.locator('[data-test="error"]')).toBeVisible();


    });
