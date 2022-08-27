function spreadTest() {
  const odd = [1, 3, 5];
  const even = [2, 4, 6];
  const combined = odd.concat(even);

  console.log("Tyical Way.. Combined result : ", combined);
  //Spread operator!
  let combinedUsingSpread = [...odd, ...even];
  console.log("Using spread operator Way : ", combinedUsingSpread);

  const spreadCombinedSecond = [12, 15, ...odd, 21, 31, ...even];
  console.log("Using spread in between array :- ", combinedUsingSpread);
}
// spreadTest();

//Rest Operator
function addNumbers(a, b, ...others) {
  console.log("a, b and others :- ", a, b, others);
  let currentSum = a + b;
  let reducedSum = others.reduce((x, y) => x + y, currentSum);
  console.log("Sum is :- ", reducedSum);
  return reducedSum;
}

// addNumbers(10, 20, 45, 56, 67, 23, 15, 89);

function spreadObject() {
  let car = { name: "Mercedes", model: "C200", color: "white", weight: 500 };
  let carsecond = { ...car };

  car.name = "BMW";
  
  console.log("Car -> ", car);  
  console.log("carsecond -> ", carsecond);
}
spreadObject();
