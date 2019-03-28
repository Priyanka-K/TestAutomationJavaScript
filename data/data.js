let Chance = require('chance');
let chance = new Chance();

module.exports = {

            email: chance.email(),
            password: "Check12",
            firstName: chance.first(),
            lastName: chance.last(),
            phone: chance.phone(),
            address: chance.address(),
            city: chance.city(),
            state: chance.state(),
            zipCode: chance.zip(),
            aliasAddress:chance.word()
};

