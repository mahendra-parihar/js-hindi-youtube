// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.23;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123')
const newId = Symbol('123')

// console.log(id === newId);

const bigNumber = 45646454884454n;

// =============== Reference (Non-primitive data types) ===

// Array, Objects, Functions
const myfriends = ["kishore", "ankita", "apurv"]

const myObj = {
    name: "Mahendra",
    age: 32
}

const myFunc = function(){
    console.log("Hello world");
}

// console.log(typeof myFunc); // Function
// console.log(typeof newId); // Symbol


// https://262.ecma-international.org/5.1/#sec-11.4.3
