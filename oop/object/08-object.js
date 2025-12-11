const person = {
  greet() {
    console.log("hi!!");
  },
};
const student1 = { name: "Nayem", age: 25 };
student1.__proto__ = person;
console.log(student1.greet());

student1.result = 3.50;
console.log(student1);

delete student1.result;

console.log(student1);

student1.cgpa = 3.40;

console.log(student1);
console.log(Object.keys(student1));
console.log(Object.values(student1));
console.log(Object.entries(student1));

