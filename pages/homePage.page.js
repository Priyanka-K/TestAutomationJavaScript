const Page = require('../page');
const assert = require('chai').assert;

class homePage extends Page {

    //Page Elements
    get headerLogo()        { return $("#header_logo"); }
    get categoryImage()     { return $(".content_scene_cat_bg"); }
    get womenCategory()     { return $("#block_top_menu >ul>li:nth-child(1)"); }
    get dressesCategory()   { return $(".submenu-container >li:nth-child(2)>ul>li:nth-child(3)"); }



    //Page methods
    selectSummerDress() {
        browser.waitUntil(()=>this.headerLogo.isVisible());
        this.womenCategory.waitForVisible();
        browser.moveToObject('#block_top_menu >ul>li:nth-child(1)').pause(1000);
        this.dressesCategory.click();
        this.categoryImage.waitForVisible();
    }

}

module.exports = new homePage();