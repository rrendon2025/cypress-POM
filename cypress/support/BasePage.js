/**
 * BasePage class
 * Contains common methods for all page objects
 */
class BasePage {
    constructor() {
        this.url = Cypress.config('baseUrl');
    }

    /**
     * Navigate to page
     * @param {string} path - Optional path to append to base URL
     */
    visit(path = '') {
        cy.visit(`${this.url}${path}`);
    }

    /**
     * Get element using selector
     * @param {string} selector - Element selector
     * @returns {Cypress.Chainable} - Cypress element
     */
    getElement(selector) {
        return cy.get(selector);
    }

    /**
     * Type text into an input field
     * @param {string} selector - Element selector
     * @param {string} text - Text to type
     * @returns {BasePage} - For method chaining
     */
    type(selector, text) {
        this.getElement(selector).clear().type(text);
        return this;
    }

    /**
     * Click on an element
     * @param {string} selector - Element selector
     * @returns {BasePage} - For method chaining
     */
    click(selector) {
        this.getElement(selector).click();
        return this;
    }

    /**
     * Check if element is visible
     * @param {string} selector - Element selector
     * @returns {Cypress.Chainable} - Cypress element
     */
    isVisible(selector) {
        return this.getElement(selector).should('be.visible');
    }

    /**
     * Get page title
     * @returns {Cypress.Chainable} - Cypress title
     */
    getTitle() {
        return cy.title();
    }

    /**
     * Wait for specific time
     * @param {number} ms - Milliseconds to wait
     * @returns {BasePage} - For method chaining
     */
    wait(ms) {
        cy.wait(ms);
        return this;
    }
}

export default BasePage; 