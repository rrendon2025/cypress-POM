// Inventory Page Object - Handles all interactions on the inventory/products page

import BasePage from '../support/BasePage';
import InventoryLocators from '../locators/InventoryLocators';

class InventoryPage extends BasePage {
    constructor() {
        super();
        this.locators = InventoryLocators;
    }

    // Get the title element of the page
    getPageTitle() {
        return this.getElement(this.locators.PAGE_TITLE);
    }

    // Get all inventory items
    getAllItems() {
        return this.getElement(this.locators.INVENTORY_ITEM);
    }

    // Add an item to cart by name
    addItemToCart(itemName) {
        this.getElement(this.locators.INVENTORY_ITEM_NAME)
            .contains(itemName)
            .parents(this.locators.INVENTORY_ITEM)
            .find(this.locators.ADD_TO_CART_BUTTON)
            .click();
        return this;
    }

    // Remove an item from cart by name
    removeItemFromCart(itemName) {
        this.getElement(this.locators.INVENTORY_ITEM_NAME)
            .contains(itemName)
            .parents(this.locators.INVENTORY_ITEM)
            .find(this.locators.REMOVE_BUTTON)
            .click();
        return this;
    }

    // Get the shopping cart item count
    getCartCount() {
        return this.getElement(this.locators.SHOPPING_CART_BADGE);
    }

    // Navigate to the shopping cart
    goToCart() {
        this.click(this.locators.SHOPPING_CART_LINK);
        return this;
    }

    // Sort products by given option
    sortProductsBy(sortOption) {
        this.getElement(this.locators.SORT_DROPDOWN).select(sortOption);
        return this;
    }
    
    // Get backpack image
    getBackpackImage() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.CONTAINER)
            .find(this.locators.SAUCE_LABS_BACKPACK.IMAGE);
    }
    
    // Get backpack name
    getBackpackName() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.NAME);
    }
    
    // Get backpack price
    getBackpackPrice() {
        return this.getElement(this.locators.SAUCE_LABS_BACKPACK.PRICE);
    }
    
    // Add backpack to cart
    addBackpackToCart() {
        this.click(this.locators.SAUCE_LABS_BACKPACK.ADD_BUTTON);
        return this;
    }
}

export default InventoryPage;