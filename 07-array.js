const fruits = ["apple", "banana", "oragne", "plam", "water mellon"];

for (let fruit of fruits) {
  console.log(fruit);
}
fruits[0] = "Apple";
fruits.push("Mango", "Blackberry");
console.log(fruits);

console.log(fruits);
console.log(fruits.slice(0));

console.log(fruits.slice(0, 4));
