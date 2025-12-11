const Hello = () => {
  console.log("Hello");
};
Hello();

// with parameter
const print = (name) => {
  console.log("Hello " + name);
};
print("Nayem");

// with return
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 6));

// one line return
const mul = (a, b) => a * b;

console.log(mul(3, 4));
