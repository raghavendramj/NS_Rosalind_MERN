let x = 20;
function testScope() {
  let x = 30;
  if (x === 30) {
    let x = 45;
    console.log("1. X:- ", x);
  }
  console.log("2. X:- ", x);
}
testScope();
console.log("3. X:- ", x);
