const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', { name: 'Email*' })
        this.passwordField = page.getByRole('textbox', { name: 'Password*' });
        this.submitBtn = page.getByRole('button', { name: 'Sign In' });

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
}