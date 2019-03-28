const Page = require('../page');
const assert = require('chai').assert;
const Chance = require('chance');
let chance = new Chance();

class shippingPage extends Page {

    //page elemets
    get agreeTerms()            { return $("#cgv"); }
    get shippingLandingPage()   { return $("#carrier_area"); }
    get selectedTermsCheckbox() { return $("#uniform-cgv .checked"); }
    get proceedToCheckout()     { return $(".cart_navigation button, input[type='submit']"); }
    get paymentPageLanding()    { return $(".columns-container #columns"); }
    get cartProduct()           { return $(".cart_description .product-name>a"); }


    //page methods
    termsToCheckout() {
        this.shippingLandingPage.isVisible();
        this.agreeTerms.click();
        this.selectedTermsCheckbox.isExisting();
        this.proceedToCheckout.click();
        this.paymentPageLanding.waitForVisible();
    }

    verifyProductOrder() {
        let productName = console.log(this.cartProduct.getText());
        this.paymentPageLanding.waitForVisible();
        assert.equal(productName, "Printed Chiffon Dress", `FAIL: Product in cart does not match the product added from shelfPage`)
    }
}

module.exports = new shippingPage();
