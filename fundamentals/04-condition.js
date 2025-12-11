// If else condition
const age = 50;
if (age >= 65) {
  console.log("Older");
} else if (age > 30) {
  console.log("Middile Age");
} else {
  console.log("Younger");
}

// Ternary Condition
let text = age < 18 ? "Children" : "Adult";
console.log(text);

// Switch Condition
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuseday");
    break;
  default:
    console.log("friday");
}

const person = { name: "Nayem", age: 26 };

person.name = "Tamim";

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

let s = "   Helllo     word     agf g";

console.log(s.replaceAll(" ", ""));

let a;
// console.log(2 && 1 && 5 && 10);
// console.log(1 || 10 || 5);

const b = a ?? 10;
console.log(b);
