class Page {

    get headerLogo()        {return $("#header_logo")}

    hasLoaded() {
        this.headerLogo.waitForVisible();
    }

    open(path) {
        if (typeof(path) == 'undefined') { path = "/"; }
        browser.url(path);
        this.hasLoaded();
        return this;
    }
}
module.exports = Page;