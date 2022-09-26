let promise = new Promise(function (resolve, reject) {
  // Make an asynchronous call and either resolve or reject
});

//How promises are resolved and rejected
let promiseRes = new Promise(function (resolve, reject) {
  resolve("I am done");
});

let promiseRej = new Promise(function (resolve, reject) {
  reject(new Error("Something is not right!"));
});

//Important Note:
// A Promise executor should call only one resolve or one reject.
// Once one state is changed (pending => fulfilled or pending => rejected), that's all.
// Any further calls to resolve or reject will be ignored.

let promiseMultiCase = new Promise(function (resolve, reject) {
  resolve("I am surely going to get resolved!");

  reject(new Error("Will this be ignored?")); // ignored
  resolve("Ignored?"); // ignored
});

//How to Use the .then() Promise Handler
promiseMultiCase.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

//If you are interested only in successful outcomes, you can just pass one argument to it, like this:
promise.then((result) => {
  console.log(result);
});

// If you are interested only in the error outcome, you can pass null for the first argument, like this:

promise.then(null, (error) => {
  console.log(error);
});


