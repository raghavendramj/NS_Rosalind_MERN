let addFunction = async (a, b) => {
  return new Promise((resolve, reject) => {
    if (!a || !b) {
      reject("Unable to perform the operation!");
    } else {
      setTimeout(() => {
        let result = a + b;
        resolve(result);
      }, 4000);
    }
  });
};

let addPromise = addFunction(10, 12);
await addPromise.then((success) => console.log("addPromise Success: -", success));

