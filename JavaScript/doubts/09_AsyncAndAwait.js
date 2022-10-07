function basicAsyncSyntax() {
  //The word “async” before a function means one simple thing: a function always returns a promise.
  async function getName() {
    return Number.parseInt(Math.random() * 1000);
  }

  getName().then((value) => console.log(value));
  getName().then(console.log);
}

function explcitPromiseMention() {
  //We could explicitly return a promise, which would be the same
  async function getRandomNumber() {
    return Promise.resolve(Number.parseInt(Math.random() * 1000));
  }

  getRandomNumber().then(console.log);
}

//The keyword await makes JavaScript wait until that promise settles and returns its result.

function asyncWithAwait() {
  async function sayHello() {
    try {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("rejected!"), 1000);
      });
      let result = await promise; //wait until the promise resolves (*)
      console.log("Result :-", result);
    } catch (err) {
      // catches errors both in fetch and response.json
      console.log("Error is :- ", err);
    }
  }
  sayHello();
}

// asyncWithAwait();

// Can’t use await in regular functions

function nonUsageOfAwaitInRegularFuction() {
  function getName() {
    let promise = Promise.resolve(Number.parseInt(Math.random() * 1000));
    //let result = await promise; // Syntax error
    console.log("Result :- ", result);
  }
  getName();
}


