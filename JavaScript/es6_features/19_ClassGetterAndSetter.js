class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name can't be empty";
    }
    this.name = newName;
  }
}

let john = new Person("John Doe");
console.log("Name:- ", john.getName());
john.setName("Ricky Walter");
console.log("Name:- ", john.getName()); 