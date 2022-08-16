function callExplanation() {
  function welcomeToClass() {
    console.log("Welcome to Javascript!", this.global);
  }
  welcomeToClass();
  welcomeToClass.call();
  //The main purpose of call() and apply()
  //is to set the context of 'this' inside a function irrespective
  // whether that function is being called in the
  //1. global scope or
  //2. as object's method

  function invokeMe() {
    console.log("This", this);
  }

  invokeMe(); //Global/Window Object

  function invokeMe() {
    "use strict";
    console.log("This", this); //undefined
  }
  invokeMe();

  invokeMe.call({ a: 10 }); // set the context of this -> {a: 10} inside a function
}

function example() {
  function add(a, b) {
    "use strict";
    console.log("this :- ", this);
    var result = a + b + this.x + this.y;
    console.log("result :- ", result);
    console.log("-----------------------------")
  }

//   add(12, 14);
  var validObject = { x: 20, y: 30 };
  add.call(validObject, 12, 14);
  add.apply(validObject, [12, 14]);
}
example();
