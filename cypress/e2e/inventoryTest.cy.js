import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe('Inventory Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    
    beforeEach(() => {
        // Login before each test using environment variables
        loginPage.visit();
        const username = Cypress.env('USERNAME');
        const password = Cypress.env('PASSWORD');
        loginPage.login(username, password);
        
        // Verify we're on the inventory page
        cy.url().should('include', '/inventory.html');
    });
    
    it('TC1 Should validate Sauce Labs Backpack product details', () => {
        // Validate exact product name
        inventoryPage.getBackpackName()
            .should('be.visible')
            .and('have.text', 'Sauce Labs Backpack');
        
        // Validate exact product price
        inventoryPage.getBackpackPrice()
            .should('be.visible')
            .and('have.text', '$29.99');
        
        // Log the validation for reporting
        cy.log(' Validated product name is exactly: "Sauce Labs Backpack"');
        cy.log(' Validated product price is exactly: "$29.99"');
        
        // Validate product image is visible and has correct alt text
        inventoryPage.getBackpackImage()
            .should('be.visible')
            .and('have.attr', 'alt', 'Sauce Labs Backpack');
        
        // Validate the image src contains 'backpack'
        inventoryPage.getBackpackImage()
            .should('have.attr', 'src')
            .and('include', 'backpack');
    });
    
    it('TC2Should add Sauce Labs Backpack to cart', () => {
        // Add backpack to cart
        inventoryPage.addBackpackToCart();
        
        // Verify cart badge shows 1 item
        inventoryPage.getCartCount()
            .should('be.visible')
            .and('have.text', '1');
    });
}); 