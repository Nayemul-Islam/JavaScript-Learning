// Function Without parameter
function greet() {
  console.log("Hello world");
}
greet();

// function with parameter
function printName(name) {
  console.log(`hi! I am ${name}`);
}
printName("Nayem");

// function with return
function add(a, b) {
  return a + b;
}

console.log(add(4, 5));

// function assign in variable
const mul = function (a, b) {
  return a * b;
};

console.log(mul(4, 5));
