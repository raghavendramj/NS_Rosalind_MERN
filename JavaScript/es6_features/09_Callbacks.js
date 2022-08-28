let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let division = (a, b) => {
  return a / b;
};

let add = (a, b) => {
  return a + b;
};

let calcultor = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

calcultor(34, 12, subtract);
calcultor(34, 12, multiply);
calcultor(34, 12, division);
// calcultor(34, 12, add);
calcultor(34, 12, (a, b) => {
  return a + b;
});
