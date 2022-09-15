class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age; //Private field '#age' must be declared in an enclosing class
  }

  greet() {
    console.log(`name: ${this.name}, age: ${this.#age}`);
  }
}

let joe = new Person("Joe", 27);
joe.greet();
console.log("Name:- ", joe); //You can't access
