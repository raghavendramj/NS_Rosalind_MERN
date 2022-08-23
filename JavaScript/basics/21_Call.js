function basicExample() {
  function add(x, y) {
    return x + y;
  }

  console.log(add instanceof Function);

  // /The Function.prototype type has the call() method with the following syntax:

  var result = add(10, 20);
  console.log("add :- result :- ", result);

  var object = { a: 10, b: 20 };
  result = add.call(object, 10, 20);

  console.log("add.call Result :- ", result);
}

function secondExample() {
  var greetingVar = "Hi";

  function say(name) {
    console.log(this.greeting + " " + name);
  }
  say("Raghavendra");
  say.call({ greeting: greetingVar }, "Raghavendra");
  //this { greeting: "Welcome" } -> it is valid for only current call
  say.call({ greeting: "Welcome" }, "Raghavendra");
  say.call({ greeting: "Warm Welcome" }, "Raghavendra");
}

secondExample();
