function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

var person = new Person("Raghav", 25, "raghav@gmail.com");
for (var each in person) {
  console.log(each, " :- ", person[each]);
}
console.log(person.age);
console.log(person['email']);

//Adding a property to the object!
person.address = "Bangalore";
person["phone"] = 123456;
console.log(person);

//Removing the property from the object!
delete person["email"];
console.log(person);

//All Keys
const keys = Object.keys(person);
console.log(keys);

//Check for existence
if ("phone" in person) {
  console.log("Person has got phone property!");
}
