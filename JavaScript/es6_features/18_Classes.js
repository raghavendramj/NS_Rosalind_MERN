// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

let john = new Person("John Doe");
console.log("Name:- ", john.getName());

console.log("john instanceof Person :-", john instanceof Person);
console.log("john instanceof Object :-", john instanceof Object);


let gilly = new Person("Adam Gilly");
let nameOfThePerson = gilly.getName();
console.log("Name :- ", nameOfThePerson);


class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

