//Generators
//Regular functions return only one, single value (or nothing).

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }
//The example above shows 1, then 2, and that’s all. It doesn’t show 3!
//It’s because for..of iteration ignores the last value, when done: true.
//So, if we want all results to be shown by for..of, we must return them with yield:

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generatedValues = generateSequence();
for (let eachValue of generatedValues) {
  console.log("generatedValues eachValue -> ", eachValue);
}

let range = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]);

function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) 
    yield i;
}

let returnedVal = generateSequence2(1, 20);
for(let eachCurr of returnedVal){
    console.log("eachCurr -> ", eachCurr);
}
 