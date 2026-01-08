import{ test, expect} from '@playwright/test';

test('Mi QA', async ({ page }) => {

await page.goto ('https://www.youtube.com/');

await expect(page).toHaveTitle (/youtube/);

await expect(page).toHaveURL ('https://www.youtube.com/');

const searcheImput = page.locator('Imput[name "q"]');
await expect(searcheImput).toBeVisible();

});