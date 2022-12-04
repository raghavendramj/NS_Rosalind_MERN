function useOfAsync() {
  //There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”

  async function greet() {
    return "Welcome";
  }

  //The word “async” before a function means one simple thing: a function always returns a promise.
  //Other values are wrapped in a resolved promise automatically.

  let promiseFromAsync = greet();
  console.log("1. promiseFromAsync -> ", promiseFromAsync);
  promiseFromAsync.then(console.log);

  async function explicitMentionOfPromise() {
    return Promise.resolve("Welcome");
  }

  promiseFromAsync = explicitMentionOfPromise();
  console.log("2. promiseFromAsync -> ", promiseFromAsync);
  promiseFromAsync.then(console.log);
}

function useOfAysncAndWait() {
  // await, that works only inside async functions,

  async function addNumbers(a, b) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let sum = a + b;
        resolve(`Sum is ${sum}, resolved after 3 seconds!`);
      }, 5000);
    });

    let result = await promise;
    console.log("Resolved promise using await :- ", result);
  }
  addNumbers(10, 20);
}
useOfAysncAndWait();
