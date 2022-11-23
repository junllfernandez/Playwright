const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pageElements/HomePage");
const { LoginPage } = require("../pageElements/LoginPage");


test.describe('Login page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Login successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.clickSignInButton();
    await loginPage.typeUsername('playwright@pokemail.net');
    await loginPage.typePassword('Test123!@#');
    await loginPage.clickSubmitBtn();
    await expect(homePage.signInButton).toBeHidden();
  });
});