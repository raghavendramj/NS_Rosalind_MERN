// Value Types:- Copied By Valu
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types:- Copied by reference
// Object
// Function
// Array


// a.js
var nameOfThePerson;
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

nameOfThePerson = "John";
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

//b.js
nameOfThePerson = 12;
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

// new.js
//a.js
//b.js

nameOfThePerson = true;
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

nameOfThePerson = null;
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

nameOfThePerson = { name: "John", age: 25 };
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);

nameOfThePerson = function () {
  console.log("Its a function");
};
console.log("type of(nameOfThePerson): ", typeof nameOfThePerson);
