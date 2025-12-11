const User = require("./User");

class Admin extends User {
  constructor(id, name, email, password) {
    super(id, name, email, password, "admin");
  }
}
module.exports = Admin;
