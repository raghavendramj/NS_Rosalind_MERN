class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    //Deafult parameter = true
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName());