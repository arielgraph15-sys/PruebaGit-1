import{ test, expect} from "@playwright/test";

test(' MI PRIEMRA VEZ COMO QA', async ({ page }) => {       
        // NAVEGANDO A LA PAGINA DE GOOGLE
await page.goto('https://www.google.com/?hl=es&gws_rd=ssl');

        // VALIDAR EL TITULO DE LA PAGINA
await expect(page).toHaveTitle(/Google/);

        // PROBANDO LA URL DE LA PAGINA
await expect(page).toHaveURL('https://www.google.com/?hl=es&gws_rd=ssl');

        //VALIDAR QUE TEXTO DE BUSQUEDA SEA VISIBLE
const searcheImput = page.locator('imput[name"q"]');
await expect(searcheImput).toBeVisible();

});

