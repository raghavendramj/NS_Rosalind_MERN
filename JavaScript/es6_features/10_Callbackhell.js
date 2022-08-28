const calculate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

let division = (a, b) => {
  return a / b;
};

let multiply = (a, b) => {
  calculate(a, b, division); //Function invocation
  return a * b;
};

let subtract = (a, b) => {
  calculate(a, b, multiply); //Function invocation
  return a - b;
};

let add = (a, b) => {
  calculate(a, b, subtract); //Function invocation
  return a + b;
};

let operateInSequence = (a, b) => {
  // calculate(a, b, add);
  calculate(a, b, (a, b) => {
    // calculate(a, b, subtract);
    calculate(a, b, (a, b) => {
      // calculate(a, b, multiply);
      calculate(a, b, (a, b) => {
        // calculate(a, b, division);
        calculate(a, b, (a, b) => {
          //throw console.error("Things went wrong"); //This will fail the entire flow of callbacks!
          return a / b;
        });
        return a * b;
      });
      return a - b;
    });
    return a + b;
  });
};

operateInSequence(45, 5);
