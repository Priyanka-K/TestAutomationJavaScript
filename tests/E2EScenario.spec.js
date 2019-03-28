const HomePage = require('../pages/homePage.page.js');
const SummerDressPage = require('../pages/summerDressPage.page.js');
const CartPage = require('../pages/cartPage.page');
const authenticationPage = require('../pages/authenticationPage.page');
const addressPage = require('../pages/addressPage.page');
const shippingPage = require('../pages/shippingPayment.page')
const user = require('../data/data.js');
const assert = require('chai').assert;


suite('load website', function() {

    setup('open site', function () {
        browser.url("/");
    });

    teardown("clean-up", function() {
        browser.deleteCookie();
    });

    test('Add a summer dress to cart and proceed to checkout', function () {
        HomePage.selectSummerDress();
        SummerDressPage.addChiffonDressToCart();
        SummerDressPage.goToCartPage();
        CartPage.proceedToCheckout();
        authenticationPage.startSignup(user.email);
        authenticationPage.createAccount(user.firstName,user.lastName,user.email,user.password,user.address,user.city,user.state,user.zipCode,user.phone,user.aliasAddress);
        addressPage.ContinueToCheckout();
        shippingPage.termsToCheckout();
        shippingPage.verifyProductOrder();
    });

});