class User {
  #id;
  #name;
  #email;
  #password;
  #role;
  constructor(id, name, email, password, role) {
    this.#email = email;
    this.#id = id;
    this.#name = name;
    this.#password = password;
    this.#role = role;
  }
  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
  get password() {
    return this.#password;
  }
  set password(newPassword) {
    this.#password = newPassword;
  }
  get id() {
    return this.#id;
  }
  set id(newId) {
    this.#id = newId;
  }
  get role() {
    return this.#role;
  }
  set role(newRole) {
    this.#role = newRole;
  }
}
module.exports = User;
