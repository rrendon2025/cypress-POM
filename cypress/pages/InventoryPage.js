import BasePage from '../support/BasePage';
import InventoryLocators from '../locators/InventoryLocators';

/**
 * InventoryPage class
 * Handles all interactions with the inventory/products page
 */
class InventoryPage extends BasePage {
    constructor() {
        super();
        this.locators = InventoryLocators;
    }

    /**
     * Get the title element of the page
     * @returns {Cypress.Chainable} - Title element
     */
    getPageTitle() {
        return this.getElement(this.locators.PAGE_TITLE);
    }

    /**
     * Get all inventory items
     * @returns {Cypress.Chainable} - All inventory items
     */
    getAllItems() {
        return this.getElement(this.locators.INVENTORY_ITEM);
    }

    /**
     * Add an item to the cart by its name
     * @param {string} itemName - Name of the item to add
     * @returns {InventoryPage} - For method chaining
     */
    addItemToCart(itemName) {
        this.getElement(this.locators.INVENTORY_ITEM_NAME)
            .contains(itemName)
            .parents(this.locators.INVENTORY_ITEM)
            .find(this.locators.ADD_TO_CART_BUTTON)
            .click();
        return this;
    }

    /**
     * Remove an item from the cart by its name
     * @param {string} itemName - Name of the item to remove
     * @returns {InventoryPage} - For method chaining
     */
    removeItemFromCart(itemName) {
        this.getElement(this.locators.INVENTORY_ITEM_NAME)
            .contains(itemName)
            .parents(this.locators.INVENTORY_ITEM)
            .find(this.locators.REMOVE_BUTTON)
            .click();
        return this;
    }

    /**
     * Get the shopping cart badge count
     * @returns {Cypress.Chainable} - Cart badge element
     */
    getCartCount() {
        return this.getElement(this.locators.SHOPPING_CART_BADGE);
    }

    /**
     * Go to shopping cart
     * @returns {InventoryPage} - For method chaining
     */
    goToCart() {
        this.click(this.locators.SHOPPING_CART_LINK);
        return this;
    }

    /**
     * Sort products by the provided option
     * @param {string} sortOption - Option to sort by (e.g., 'az', 'za', 'lohi', 'hilo')
     * @returns {InventoryPage} - For method chaining
     */
    sortProductsBy(sortOption) {
        this.getElement(this.locators.SORT_DROPDOWN).select(sortOption);
        return this;
    }
    
    /**
     * Get Sauce Labs Backpack image
     * @returns {Cypress.Chainable} - Backpack image element
     */
    getBackpackImage() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.CONTAINER)
            .find(this.locators.SAUCE_LABS_BACKPACK.IMAGE);
    }
    
    /**
     * Get Sauce Labs Backpack name
     * @returns {Cypress.Chainable} - Backpack name element
     */
    getBackpackName() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.NAME);
    }
    
    /**
     * Get Sauce Labs Backpack price
     * @returns {Cypress.Chainable} - Backpack price element
     */
    getBackpackPrice() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.PRICE);
    }
    
    /**
     * Add Sauce Labs Backpack to cart
     * @returns {InventoryPage} - For method chaining
     */
    addBackpackToCart() {
        this.click(this.locators.SAUCE_LABS_BACKPACK.ADD_BUTTON);
        return this;
    }
}

export default InventoryPage; 