/**
 * Inventory page locators
 * This file contains all selectors for the inventory page
 */

export default {
    PAGE_TITLE: '.title',
    INVENTORY_ITEM: '.inventory_item',
    INVENTORY_ITEM_NAME: '.inventory_item_name',
    INVENTORY_ITEM_DESC: '.inventory_item_desc',
    INVENTORY_ITEM_PRICE: '.inventory_item_price',
    ADD_TO_CART_BUTTON: 'button[id^="add-to-cart"]',
    REMOVE_BUTTON: 'button[id^="remove"]',
    SHOPPING_CART_BADGE: '.shopping_cart_badge',
    SHOPPING_CART_LINK: '.shopping_cart_link',
    SORT_DROPDOWN: '[data-test="product_sort_container"]',
    
    // Specific product locators
    SAUCE_LABS_BACKPACK: {
        CONTAINER: '.inventory_item:nth-child(1)',
        NAME: '#item_4_title_link > .inventory_item_name',
        IMAGE: 'img[alt="Sauce Labs Backpack"]',
        DESCRIPTION: '.inventory_item:nth-child(1) .inventory_item_desc',
        PRICE: '.inventory_item:nth-child(1) .inventory_item_price',
        ADD_BUTTON: '#add-to-cart-sauce-labs-backpack'
    }
}; 