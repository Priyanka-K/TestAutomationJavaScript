const Page = require('../page');
const assert = require('chai').assert;
const Chance = require('chance');
let chance = new Chance();


class authenticationPage extends Page {

    get emailInputBox()         {return $("#email_create"); }
    get createAccntButton()    { return $("#SubmitCreate"); }
    get accountCreationForm()   { return $("#account-creation_form"); }
    get genderRadioButton()     { return $("#id_gender1"); }
    get firstName()             { return $("#customer_firstname"); }
    get lastName()              { return $("#customer_lastname"); }
    get email()                 { return $("#email"); }
    get password()              { return $("#passwd"); }
    get FName()                 { return $(".required #firstname"); }
    get LName()                 { return $(".required #lastname"); }
    get address()               { return $("#address1"); }
    get city()                  { return $("#city"); }
    get state()                 { return $("#id_state"); }
    get zipcode()               { return $("#postcode"); }
    get phone()                 { return $("#phone_mobile"); }
    get addressAlias()          { return $("#alias"); }
    get registerButton()        { return $("#submitAccount"); }

    //page methods
    startSignup(email) {
        this.emailInputBox.setValue(email);
        this.createAccntButton.click();
        this.accountCreationForm.waitForVisible();
    }

    createAccount(fname,lname,email,password,address,city,state,zipCode,mobilePhone,aliasAddress) {
        this.accountCreationForm.waitForVisible();
        this.genderRadioButton.click();
        if (fname)  { this.firstName.setValue(fname); }
        if (lname)  { this.lastName.setValue(lname); }
        if (email)  {
            this.email.clearElement();
            this.email.setValue(email);
            //this.email.attr('value',email);
        }
        if (password) { this.password.setValue(password);}
        if (fname)  { this.FName.setValue(fname); }
        if (lname)  { this.LName.setValue(lname); }
        if (address){ this.address.setValue(address);}
        if (city)   { this.city.setValue(city);}
        if (state)   { this.state.selectByIndex(2); }
        if (zipCode) { this.zipcode.setValue(zipCode);}
        if (mobilePhone) {this.phone.setValue(mobilePhone);}
        if (aliasAddress) {this.addressAlias.setValue(aliasAddress); }
        this.registerButton.click();
        browser.pause(3000)
    }


}

module.exports = new authenticationPage();
