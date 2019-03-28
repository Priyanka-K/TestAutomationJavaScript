const Page = require('../page');
const assert = require('chai').assert;


class summerDressPage extends Page {

    get chiffonDress()          { return $(".product_list>li:nth-child(3)"); }
    get quickViewButton()       { return $("a.quick-view[href*=\"id_product=7\"]"); }
    get quickShoppingModal()    { return $(".fancybox-overlay "); }
    get sizeDropDown()          { return $("#group_1");}
   // get dressSizeM()            { return $(".attribute_list .selector #group_1 option:nth-child(2)"); }
    get A2CButton()             { return $(".pb-right-column button"); }
    get A2CSuccessModal()       { return $("#layer_cart"); }
    get continueShoppingButton(){ return $(".layer_cart_cart .button-container .continue"); }
    get headerContainer()       { return $(".header-container"); }
    get shoppingCart()          { return $(".shopping_cart>a"); }
    get productsGrid()          { return $(".product_list");}
    get iFrame()                { return $(".fancybox-iframe");}


    hasLoaded() {
        browser.waitUntil(()=>this.headerContainer.isVisible());
    }

    addChiffonDressToCart() {
        this.productsGrid.waitForVisible();
        this.chiffonDress.moveToObject();
        browser.waitUntil(()=> this.quickViewButton.isVisible());
        this.quickViewButton.click();
        browser.waitUntil(()=> this.quickShoppingModal.isVisible());
        this.iFrame.waitForVisible();
        this.iFrame.click();
        // let frameid = this.iFrame.getAttribute('id');
        // browser.switchTab($(frameid));
       // this.sizeDropDown.selectByValue('M');
        this.A2CButton.click();
        browser.waitUntil(()=> this.A2CSuccessModal.waitForVisible());
        this.continueShoppingButton.waitForEnabled();
        this.continueShoppingButton.click();
        this.headerContainer.waitForVisible();
    }

    goToCartPage() {
        this.hasLoaded()
        this.shoppingCart.click();
        browser.waitUntil(()=>(browser.getUrl().endsWith("controller=order")));
    }

}

module.exports = new summerDressPage()
