const Person = require("./person");

class Student extends Person {
  #cgpa;
  constructor(name, age, cgpa) {
    super(name, age);
    this.#cgpa = cgpa;
  }

  greet() {
    console.log("Hi ! I am a Student");
  }

  printResult(lowerBound, upperBound = 25) {
    if (!upperBound) {
      console.log(lowerBound & 1 ? "Passed" : "Faild");
      return;
    }
    console.log(
      lowerBound <= this.#cgpa && this.#cgpa <= upperBound ? "Good" : "Bad"
    );
  }

  get cgpa() {
    return this.#cgpa;
  }
  set cgpa(cgpa) {
    this.#cgpa = cgpa;
  }
}

const student1 = new Student("Nayem", 25, 3.5);
console.log(student1.name);

student1.printResult(20);
student1.printResult(3.3, 4.0);
