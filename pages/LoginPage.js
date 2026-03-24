class LoginPage {
    /**
     * @param {import("@playwright/test").Page} page
     */

    constructor(page) {
        this.page = page;
        // I think these will be unlikely to change??
        this.usernameInput = page.locator("input[name='username']")
        this.passwordInput = page.locator("input[name='password']")
        this.loginButton = page.locator("button[type='submit']")
    }

    async navigate() {
        // using baseUrl in config - this handles domain name
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}

module.exports = {LoginPage}