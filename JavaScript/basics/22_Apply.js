function add(x, y) {
  return x + y;
}
var result = add(10, 20);
console.log("add :- result :- ", result);

var object = { a: 10, b: 20 }
result = add.apply(object, [10, 20]);
console.log("add.apply Result :- ", result);
