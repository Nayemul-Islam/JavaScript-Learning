class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  greet() {
    console.log("Hi! I am a Person!!");
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
}

const person1 = new Person();
person1.name = "Tamim";
console.log(person1.name);

module.exports = Person;
