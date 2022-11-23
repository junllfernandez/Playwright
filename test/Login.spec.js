const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageElements/LoginPage");
const { MainPage } = require("../pageElements/MainPage");

test.describe('Login page tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Correct credentials - standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.confirmPageLoaded();
    await loginPage.typeUsername('standard_user');
    await loginPage.typePassword('secret_sauce');
    await loginPage.clickSubmitBtn();

    const mainPage = new MainPage(page);
    await mainPage.confirmSuccessfulLogin();
  });

  test('Correct credentials - problem user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.confirmPageLoaded();
    await loginPage.typeUsername('problem_user');
    await loginPage.typePassword('secret_sauce');
    await loginPage.clickSubmitBtn();

    const mainPage = new MainPage(page);
    await mainPage.confirmSuccessfulLogin();
  });

  test('Incorrect credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.confirmPageLoaded();
    await loginPage.typeUsername('standard_user');
    await loginPage.typePassword('test');
    await loginPage.clickSubmitBtn();
    await loginPage.invalidCredentialsErrorMsg();
  });

  test('Locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.confirmPageLoaded();
    await loginPage.typeUsername('locked_out_user');
    await loginPage.typePassword('secret_sauce');
    await loginPage.clickSubmitBtn();
    await loginPage.lockedUserErrorMsg();
  });
});