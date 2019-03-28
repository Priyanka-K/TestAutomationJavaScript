const Page = require('../page');
const assert = require('chai').assert;

class cartPage extends Page {

    get cartPageSummary()   { return $("#cart_title"); }
    get cartItems()         { return $("#product_7_35_0_0"); }
    get checkoutButton()    { return $(".standard-checkout"); }
    get authenticationPageLanding() { return $(".navigation_page")}

    proceedToCheckout() {
        this.cartPageSummary.waitForVisible();
        this.checkoutButton.waitForEnabled();
        //assert(this.cartItems).exists(); //verify added item is present in cart, can be improved if product IDs can be matched from Add to Cart step
        this.checkoutButton.click();
        this.authenticationPageLanding.waitForVisible(); //waitUntil user lands on authentication page

    }

}

module.exports = new cartPage();