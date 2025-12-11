const User = require("./User");

class Customer extends User {
  constructor(id, name, email, password) {
    super(id, name, email, password, "customer");
  }
}

module.exports = Customer;
