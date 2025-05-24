import BasePage from '../support/BasePage';
import LoginLocators from '../locators/LoginLocators';

/**
 * LoginPage class
 * Handles all interactions with the login page
 */
class LoginPage extends BasePage {
    constructor() {
        super();
        this.locators = LoginLocators;
    }

    /**
     * Type username into the username field
     * @param {string} username - Username to enter
     * @returns {LoginPage} - For method chaining
     */
    typeUsername(username = Cypress.env('USERNAME')) {
        this.type(this.locators.USERNAME_INPUT, username);
        return this;
    }

    /**
     * Type password into the password field
     * @param {string} password - Password to enter
     * @returns {LoginPage} - For method chaining
     */
    typePassword(password = Cypress.env('PASSWORD')) {
        this.type(this.locators.PASSWORD_INPUT, password);
        return this;
    }

    /**
     * Click the login button
     * @returns {LoginPage} - For method chaining
     */
    clickLogin() {
        this.click(this.locators.LOGIN_BUTTON);
        return this;
    }

    /**
     * Login with credentials
     * @param {string} username - Username to use (defaults to env variable)
     * @param {string} password - Password to use (defaults to env variable)
     * @returns {LoginPage} - For method chaining
     */
    login(username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) {
        cy.log(`LoginPage: Using username: ${username}, password: ${password}`);
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        return this;
    }

    /**
     * Get error message element
     * @returns {Cypress.Chainable} - Error message element
     */
    getErrorMessage() {
        return this.getElement(this.locators.ERROR_MESSAGE);
    }
}

export default LoginPage; 