class User {
  constructor(name) {
    this.name = name;
  }
}

// User.prototype.greet = function () {
//   console.log(`Welcome Mr.${this.name}`);
// };

// User.prototype.farwell = function () {
//   console.log(`See you again Mr.${this.name}`);
// };

//A mixin can be described as a class, which contains methods that can be used by other classes without inheriting from it.
//That is, mixin provides methods implementing a specific behavior.
// It is not used alone but for adding the behavior to other classes.
let additionalMethods = {
  greet() {
    console.log(`Welcome Mr.${this.name}`);
  },
  farwell() {
    console.log(`See you again Mr.${this.name}`);
  },
};

Object.assign(User.prototype, additionalMethods);

let raghav = new User("Raghavendra");
console.log("Object :-", raghav);
raghav.greet();
raghav.farwell();
