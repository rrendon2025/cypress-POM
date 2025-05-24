import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe('Login Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    
    beforeEach(() => {
        loginPage.visit();
    });
    
    it('TC1: Verify Title Page', () => {
        cy.verifyTitle('Swag Labs');
    });
    
    it('TC2: Login with valid credentials', () => {
        // Get credentials from environment variables
        const username = Cypress.env('USERNAME');
        const password = Cypress.env('PASSWORD');
        
        cy.log(`Using username from env: ${username}`);
        loginPage.login(username, password);
        
        // Verify redirect to inventory page
        cy.url().should('include', '/inventory.html');
        
        // Verify page title using inventory page
        inventoryPage.getPageTitle().should('have.text', 'Products');
    });
    
    it('TC3: Login with invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });
}); 