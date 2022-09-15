class User {
  constructor(userName) {
    this.userName = userName;
  }
}

let greetMixins = {
  welcome() {
    console.log(`Welcome ${this.userName}`);
  },
  bye() {
    console.log(`Bye ${this.userName}`);
  } 
};

Object.assign(User.prototype, greetMixins);

let user1 = new User("Raghavendra M J");
console.log("User1 :- ", user1);
user1.welcome(); 
user1.bye();
