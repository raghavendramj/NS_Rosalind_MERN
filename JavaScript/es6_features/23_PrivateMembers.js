class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age; //Private field '#age'
  }

  greet() {
    this.#printContent();
  }

  //Private Function
  #printContent() {
    console.log(`name: ${this.name}, age: ${this.#age}`);
  }
}

let joe = new Person("Joe", 27);
joe.greet();
//joe.printContent(); //TypeError: joe.printContent is not a function
