const addition = (arr) => {
  //Producing Code
  return new Promise((resolve, reject) => {
    if (arr.length != 2) {
      reject("Unable to perform the operation!");
    } else {
      let result = arr[0] + arr[1];
      console.log("Addition result :- ", result);
      resolve(arr); //Resolved with same array..
    }
  });
};

const subtraction = (arr) => {
  //Producing Code
  return new Promise((resolve, reject) => {
    if (arr.length != 2 || arr[0] < arr[1]) {
      reject("Unable to perform the operation!");
    } else {
      let result = arr[0] - arr[1];
      console.log("Subtraction result :- ", result);
      resolve(arr); //Resolved with same array..
    }
  });
};

//Detailed Prommise Chaining...
const hanldeSumSuccess = (response) => {
  console.log("Addition Response :- ", response);
  return subtraction(response);
};
const hanldeDiffSuccess = (response) => {
  console.log("Difference Response :- ", response);
};

const handleSumFailure = (error) => {
  console.log("error occurred :- ", error);
};

//Consuming Code
let firstPromise = addition([15, 9]);
let secondPromise = firstPromise.then(hanldeSumSuccess, handleSumFailure);
secondPromise.then(hanldeDiffSuccess, handleSumFailure);

//Simple Promise chaining!
addition([15, 9])
  .then(subtraction)
  .catch((error) => console.log("Error occurred single line!"));
