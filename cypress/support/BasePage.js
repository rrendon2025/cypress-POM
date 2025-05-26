class BasePage {
    constructor() {
        this.url = Cypress.config('baseUrl');
    }

    visit(path = '') {
        cy.visit(`${this.url}${path}`);
    }

    getElement(selector) {
        return cy.get(selector);
    }

    type(selector, text) {
        this.getElement(selector).clear().type(text);
        return this;
    }

    click(selector) {
        this.getElement(selector).click();
        return this;
    }

    isVisible(selector) {
        return this.getElement(selector).should('be.visible');
    }

    getTitle() {
        return cy.title();
    }

    wait(ms) {
        cy.wait(ms);
        return this;
    }
}

export default BasePage;