//Normal Function
function add(a, b) {
  console.log("Normal Function");
  return a + b;
}


//Function Expression
var addValue = (function (a, b) {
  console.log("Immediately Invoked Function Expression");
  return a + b;
})(10, 20);


console.log("Normal Function :- ", add(20, 10));
console.log("Immediately Invoked Function Expression :- ", addValue);
