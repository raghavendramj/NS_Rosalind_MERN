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
  cars[0] = 'Maruthi';
  console.log("2. cars :-", cars);
  cars = ["abc", "cde", "efg"]; //TypeError: Assignment to constant variable.
  console.log("3. cars :-", cars);
}

constArrayTest();