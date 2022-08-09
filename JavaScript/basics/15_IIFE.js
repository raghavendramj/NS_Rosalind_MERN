// Immediately Invoked Function Expression

//Normal Function
function add(a, b) {
  return a + b;
}
//add() function to the window global object
console.log(window.add);

var counter = 10;
console.log(window.counter); // 10

//Global variables pollution
counter = function (a, b, c) {
  return a + b + c;
};

//Function Expression
var difference = function (a, b) {
  return a - b;
};

var product = (function (a, b) {
  return a * b;
})(15, 5);

//The following expression is called an immediately invoked function expression (IIFE)
// because the function is created as an expression and executed immediately:

(function (a, b) {
  return a + b;
})(10, 20);


//This is the general syntax for defining an IIFE:

(function(){
    //...
})();