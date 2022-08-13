function defaultAllTrue() {
  // JavaScript object’s properties and attributes such as
  //configurable, enumerable, writable, get, set, and value.

  // [[Writable]]  -> We can modify or not
  // [[Configurable]] -> whether we can delete the property or not.
  // [[Enumerable]] -> Can be listed in Object.keys() or not.

  //By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to tr
  var person = {
    name: "Raghav",
    email: "raghav@gmail.com",
    phone: 12345,
    age: 18,
  };
  console.log("Before person :- ", person);

  person.age = 25; //Configurable -> TRUE
  console.log("Object.keys(person) :- ", Object.keys(person)); //Enumerable -> TRUE
  delete person["email"]; //Writable -> TRUE

  console.log("After person :- ", person);
}

function configurableTest() {
  var person = {
    name: "Raghav",
    email: "raghav@gmail.com",
    phone: 12345,
    age: 15,
  };

  console.log("Before Person Object.keys(person) :-  ", Object.keys(person));
  Object.defineProperty(person, "age", {
    configurable: false,
    writable: false,
    enumerable: false,
    value: 18,
  });

  delete person["age"]; // configurable -> false, can't delete
  person.age = 55; // Writable -> false, can't modify
  console.log("After Person :-  ", person);
  console.log("After Person Object.keys(person) :-  ", Object.keys(person)); //enumerable -> false
}
configurableTest();

function configurableProperty() {
  var person = { name: "Raghavendra" };
  Object.defineProperty(person, "name", {
    writable: false,
  });
  person.name = "Keshav";
  console.log(person); //{ name: "Raghavendra" }
}

function enumerableProperty() {
  var person = { name: "Raghavendra" };
  Object.defineProperty(person, "name", {
    enumerable: false,
  });
  console.log(Object.keys(person)); // [] -> empty array!
}

function configurableProperty() {
  var person = { name: "Raghavendra" };
  Object.defineProperty(person, "name", {
    configurable: false,
  });
  delete person.name;
  console.log(person); //{ name: "Raghavendra" }
}
