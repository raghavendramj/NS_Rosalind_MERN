function constVariableTest() {
  const pi = 3.14;
  console.log("1. Pi Value :-", pi);

  pi = 3.142; //TypeError: Assignment to constant variable.
  console.log("2. Pi Value :-", pi);
}

// constVariableTest();

function constArrayTest() {
  const cars = ["Saab", "Volvo", "BMW"];
  console.log("1. cars :-", cars);
  cars[0] = "Maruthi"; //Allowed
  console.log("2. cars :-", cars);
  //cars = ["abc", "cde", "efg"]; //TypeError: Assignment to constant variable.
  cars.push("Mahindra"); //Allowed
  cars.unshift("Kia"); //Allowed
  console.log("3. cars :-", cars);
  cars.shift(); //Allowed
  cars.pop(); //Allowed
  cars.splice(2, 1); //Allowed
  console.log("4. cars :-", cars);
}

// constArrayTest();

function constObjectTest() {
  const car = { type: "Fiat", model: "500", color: "white" };
  console.log("1. car :-", car);
  car.color = "red";
  console.log("2. car :-", car);
  car.owner = "Johnson";
  console.log("3. car :-", car);
  car = {type:"Volvo", model:"EX60", color:"red"}; //TypeError: Assignment to constant variable.
  console.log("4. car :-", car);
}
constObjectTest();