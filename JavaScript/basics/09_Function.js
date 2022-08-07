function sayHello() {
  console.log("Welcome to JS");
}

sayHello();

function add(a, b) {
  var result = a + b;
  console.log("Result is  ", result);
  return result;
}

console.log("Retured value is :- ", add("12", "14"));

function add(a, b) {
  var result = a + b;
  console.log("Result is ", result);
  return result;
}

var result1 = add(10, 20);
console.log("Out res is ", result1);
