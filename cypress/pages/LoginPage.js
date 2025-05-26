import BasePage from '../support/BasePage';
import LoginLocators from '../locators/LoginLocators';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.locators = LoginLocators;
    }

    // Type the username into the username input
    typeUsername(username = Cypress.env('USERNAME')) {
        this.type(this.locators.USERNAME_INPUT, username);
        return this;
    }

    // Type the password into the password input
    typePassword(password = Cypress.env('PASSWORD')) {
        this.type(this.locators.PASSWORD_INPUT, password);
        return this;
    }

    // Click the login button
    clickLogin() {
        this.click(this.locators.LOGIN_BUTTON);
        return this;
    }

    // Perform login with provided or default credentials
    login(username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) {
        cy.log(`LoginPage: Using username: ${username}, password: ${password}`);
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        return this;
    }

    // Get the error message element
    getErrorMessage() {
        return this.getElement(this.locators.ERROR_MESSAGE);
    }
}

export default LoginPage;