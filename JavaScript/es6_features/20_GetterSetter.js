class Person {
  constructor(name) {
    console.log("1.Invoked constructor ");
    this._name = name;
  }
  get name() {
    console.log("3.Invoked get ");
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name can't be empty";
    }
    console.log("2.Invoked set ");
    this._name = newName;
  }
}

let john = new Person("John Doe");
console.log("Name:- ", john.name);
john.name = "Glen Pie";
console.log("Name:- ", john.name);
