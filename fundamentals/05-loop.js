// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do while loop, this loop run atleast 1 time
i = 10;
do {
  console.log(i);
} while (i >= 11);

// for loop
for (let i = 1; i <= 10; i++) console.log(i);

const name = "Nayemul Islam";

// for of loop

for (let c of name) console.log(c);

const person = { name, age: 15 };

// for in loop

for (let key in person) {
  console.log(key, ":", person[key]);
}

// Another way to itarate in object
for (let [key, value] of Object.entries(person)) {
  console.log(key + " : " + value);
}

 
