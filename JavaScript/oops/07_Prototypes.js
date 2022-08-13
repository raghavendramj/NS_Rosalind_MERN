function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Person.prototype.nationality = "Indian";

var siman = new Person("Saiman", "Naidu");
console.log(siman.nationality);
//Returns only instance members.
console.log(siman);

function printObject(obj) {
  //returns all members (instance + prototype)
  for (var key in obj) {
    console.log(key, " : ", obj[key]);
  }
  console.log("-------------------------------");
}

printObject(siman);
console.log(
  "siman.hasOwnProperty('firstName') :- ",
  siman.hasOwnProperty("firstName")
);
console.log(
  "siman.hasOwnProperty('nationality') :- ",
  siman.hasOwnProperty("nationality")
);

// Never modify the prototypes of standard JavaScript objects.
