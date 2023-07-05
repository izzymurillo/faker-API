const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.phoneNumber = faker.phone.number();
    this.password = faker.internet.password();
  }
}

module.exports = { User };
// AGAIN ^^^ COMMON JS EXPORT SYNTAX //
// "COMMON JS" BASICALLY ES5 OR LOWER //
