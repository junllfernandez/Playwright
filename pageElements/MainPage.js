const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.mainLogo = page.locator('.app_logo');
        this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
        this.cartBtn = page.locator('#shopping_cart_container a');
        this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.tshirtAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.jacketAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    async confirmSuccessfulLogin() {
        await expect(this.mainLogo).toBeVisible();
    }

    async typePassword(password) {
        await this.passwordField.click();
        await this.passwordField.type(password);
    }

    async clickSubmitBtn() {
        await this.submitBtn.click();
    }
}