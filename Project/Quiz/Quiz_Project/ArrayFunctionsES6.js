function funcExpressionToArrowFunction() {
  //Normal function
  function add(a, b) {
    return a + b;
  }

  //Function expression -> Variable + Anonumous function
  let addNumbers = function (a, b) {
    return a + b;
  };

  //Arrow function
  let addArrow = (a, b) => {
    return a + b;
  };

  //Arrow function Simplified
  let addArrowSimplified = (a, b) => a + b;
}

function mapFunction() {
  let numbers = [2, 4, 6, 8];

  let squares = new Array();
  for (let eachNumber of numbers) {
    squares.push(eachNumber * eachNumber);
  }

  console.log("Typical Way :- ", squares);
  console.log(
    "ES6 maps Way :- ",
    numbers.map((number) => number * number)
  );

  let names = ["Virat", "Sachin", "Ganguly"];
  console.log(
    "ES6 maps Way :- ",
    names.map((name) => name.toUpperCase())
  );
}

// mapFunction();

function filterExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let evenNumbers = new Array();
  for (let number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }
  console.log("Even Numbers :-", evenNumbers);
  console.log(
    "Even Numbers ES6 Way ",
    numbers.filter((number) => number % 2 == 0)
  );
}

// filterExample();

function reduceExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sumOfNums = 0;
  for (let num of numbers) {
    sumOfNums += num;
  }
  console.log("Sum is " + sumOfNums);
  // console.log("Sum ES6 Way "+ numbers.reduce((a, c) => a + c));

  let reducedSum = numbers.reduce((accumulator, currentValue) => {
    console.log( `Accumulator : ${accumulator}, and Current Value : ${currentValue}` );
    return accumulator + currentValue;
  }, 0);

  console.log("Sum ES6 Way " + reducedSum);
}

reduceExample();
