function sealExample() {
  let obj = {
    value: 13,
  };

  Object.seal(obj);
  //prevents from deletion of existing properties but cannot prevent them from external changes

  //Can't be done
  //new properties cannot be added
  //existing properties cannot be removed
  //their enumerability and configurability cannot be changed
  //its prototype cannot be re-assigned

  //We can do this
  // Values of existing properties can still be changed as long as they are writable
  console.log("1. Object :-", obj);

  obj.value = 12;
  console.log("2. Object :-", obj);

  delete obj.value; //Not supported
  obj.next = 23; //Not supported
  console.log("3. Object :-", obj);
}
// sealExample();

function freezeExample() {
  let person = {
    name: "Raghavendra",
  };

  Object.freeze(person);
  //makes an object immune to everything even little changes cannot be made
  console.log("1. person :- ", person);
  person.name = "Raghav M J";
  console.log("2. person :- ", person);
  delete person.name;
  console.log("3. person :- ", person);
  person.age = 28;
  console.log("4. person :- ", person);
}

// freezeExample();

function freezeOnNestedProps() {
  let person = {
    name: "Raghav",
    email: "raghav@gmail.com",
    address: {
      city: "Bangalore",
      state: "Karanataka",
    },
  };

  Object.freeze(person);
  console.log("1. person :- ", person);
  delete person.address; //Not Allowed
  console.log("2. person :- ", person);
  person.address.city = "Mumbai"; //Allowed
  person.address.state = "Maharastra"; //Allowed
  console.log("3. person :- ", person);
  delete person.address.state; //Allowed
  console.log("4. person :- ", person);
}

freezeOnNestedProps();
