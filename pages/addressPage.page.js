const Page = require('../page');
const assert = require('chai').assert;

class addressPage extends Page {

    //Page Elements
    get addressPageLanding() { return $(".columns-container #columns"); }
    get proceedCheckoutButton()     { return $(".cart_navigation button, input[type='submit']"); }



    //Page Methods
    hasLoaded() {
        this.addressPageLanding.waitForVisible();
    }

    ContinueToCheckout() {
        this.hasLoaded();
        this.proceedCheckoutButton.click();
    }


}

module.exports = new addressPage();



