const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.signInButton = page.getByRole('link', { name: 'Sign In' });
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
}