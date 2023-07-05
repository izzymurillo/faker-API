const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.stateAbbr();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

module.exports = { Company };
// AGAIN ^^^ COMMON JS EXPORT SYNTAX //
// "COMMON JS" BASICALLY ES5 OR LOWER //
