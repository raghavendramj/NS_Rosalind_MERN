function add(b) {
  console.log("This is ", this);
  return this.a + b;
}
var obj = { a: 10 };

// console.log("add.call :- ", add.call(obj, 13)); //One time
// console.log("add.apply :- ", add.apply(obj, [15])); //One time

var add10 = add.bind(obj);
console.log("typeof add10; :- ", typeof add10);
console.log("add10(23); :- ", add10(23));

var obj = { a: 45 }; //Modify the object
add10 = add.bind(obj); //Re-Bind it again!

console.log("add10(5); :- ", add10(5));
console.log("add10(17); :- ", add10(17));
