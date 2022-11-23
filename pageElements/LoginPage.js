const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLogo = page.locator('.login_logo');
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.submitBtn = page.locator('[data-test="login-button"]');
        this.errorMsg = page.locator('[data-test="error"]');

    }

    async confirmPageLoaded() {
        await expect(this.loginLogo).toBeVisible();
    }

    async typeUsername(username) {
        await this.usernameField.click();
        await this.usernameField.type(username);
    }

    async typePassword(password) {
        await this.passwordField.click();
        await this.passwordField.type(password);
    }

    async clickSubmitBtn() {
        await this.submitBtn.click();
    }

    async invalidCredentialsErrorMsg() {
        await expect(this.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }

    async lockedUserErrorMsg() {
        await expect(this.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    }
}