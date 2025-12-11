// JavaScript have 8 types of data


// 1. String 
console.log("JavaScript have 8 Types of data.");
const firstName = "Nayemul";
const lastName = String("Islam");

let type = typeof firstName;
console.log(1 + ". "+ type);


// 2. Number
let age = 25;
let cost = Number(24.20);

type = typeof cost ;
console.log(2 + ". "+ type);

// 3. BigInt used to store big number

let x = 1234325895649134529597n;
let y = BigInt(129944991);


type = typeof x ;
console.log(3 + ". "+ type);

// 4. Boolean 
var flag1 = false;
var flag2 = true;

type = typeof flag1 ;
console.log(4 + ". "+ type);

// 5. Object 
const person = {name : firstName , age : age};
const user = {firstName, lastName, age};

type = typeof user ;
console.log(5 + ". "+ type);


// 6. Undefined (Variable declared but value wasnt assigned yet)
let a;


type = typeof a ;
console.log(6 + ". "+ type);


// 7. Null
let b = null;

type = typeof b ;
console.log(7 + ". "+ type); // null always object type

// 8. Symbol 
const s = Symbol('a');

type = typeof s ;
console.log(8 + ". "+ type);
