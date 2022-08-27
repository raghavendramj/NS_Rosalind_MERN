//Normal function
function greetPerson(name) {
  console.log("Hello", name);
}

greetPerson("Raghavendra");

//Anonymous function => Function expression
let greetPersonVariable = function (name) {
  console.log("Hello", name);
};

greetPersonVariable("Virat");

//Arrow function
let greetPersonArrow = (name) => {
  console.log("Hello", name);
};

greetPersonArrow("Sachin");

//Arrow function => Simplified
let greetSimp = (name) => console.log("Hello", name);
greetSimp("Ganguly");
