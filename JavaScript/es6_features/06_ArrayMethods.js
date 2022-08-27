//Map -> Takes input [1, 2, 3, 4]  => [1, 4, 9, 16];

function mapFunctionExample() {
  let numbers = [2, 4, 6, 8];
  let squares = new Array();
  for (let number of numbers) {
    let square = number * number;
    squares.push(square);
  }
  console.log("Typical Way :- Squared Numbers are :- ", squares);

  let squareCallBack = (number) => number * number;
  let squaresUsingES6 = numbers.map(squareCallBack);
  console.log("ES6 Way :- Squared Numbers are :- ", squaresUsingES6);

  let names = ["Virat", "Rishabh", "Rahul", "Venkatesh"];
  console.log(
    "Length of Names :- ",
    names.map((name) => name.length)
  );

  let cricketersLC = ["virat", "sachin", "ganguly"];
  const convertToUC = (cricketer) => cricketer.toUpperCase();
  console.log("Uppercased cricketers  :- ", cricketersLC.map(convertToUC));
}

// mapFunctionExample();

function filterFunctions() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let evenNumbers = new Array();
  for (let number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }
  console.log("Even Numbers :-", evenNumbers);

  const isEvenPredicate = (number) => number % 2 == 0; // -> True /false
  const evenNums = numbers.filter(isEvenPredicate);
  console.log("ES6 Even Numbers :-", evenNums);

  const isOddPredicate = (number) => number % 2 != 0; // -> True /false
  const oddNums = numbers.filter(isOddPredicate);
  console.log("ES6 Odd Numbers :-", oddNums);
}

// filterFunctions();

function sortfunction() {
  let numbers = [4, 1, 2, 6, 7, 3, 9, 5];
  console.log(
    "Ascending Order :- ",
    numbers.sort((a, b) => a - b)
  );
  console.log(
    "Descending Order :- ",
    numbers.sort((a, b) => b - a)
  );
}

// sortfunction();

function findFun() {
  let arr = [21, 5, 22, 19, 25, 34];
  let resNum = arr.sort((a, b) => a - b).find((num) => num > 20); //Finds first num > 20
  console.log("Find first num > 20 :- ", resNum);
  let resultFiltered = arr.sort((a, b) => a - b).filter((num) => num > 20); //Finds first num > 20
  console.log("Find all nums > 20:- ", resultFiltered);
}
// findFun();

function findFirstIndex() {
  let arr = [5, 19, 22, 36, 25, 34];
  let indexOfNumGt20 = arr.findIndex((num) => num > 20); //Finds first num > 20
  console.log("Find first index of num > 20 :- ", indexOfNumGt20);
}
// findFirstIndex();

function reduceFunction() {
  let numbers = [5, 19, 22, 36, 25, 34];
  let total = 0;
  for (let currNum of numbers) {
    console.log("Current total :- ", total, " current num :- ", currNum);
    total = total + currNum;
  }
  console.log("Typical way of adding : ", total);

  let reduceCallBack = (total, currNum) => {
    console.log("Current total :- ", total, " current num :- ", currNum);
    return total + currNum;
  };

  //Simplified arrow
  let reduceCallBackSimplified = (total, currNum) => total + currNum;

  let reducedTotal = numbers.reduce(reduceCallBack, 0);
  console.log("ES6 Totalling is:- ", reducedTotal);
}

reduceFunction();
