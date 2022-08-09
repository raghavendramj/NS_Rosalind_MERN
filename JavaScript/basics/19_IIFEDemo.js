//add -> a, b
const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function mutiply(a, b) {
    return a * b;
  }
  return {
    add: add,
    mutiply: mutiply,
  };
})();
//got overwritten ->add -> without params
function add() {
  return "add";
}

var resultFromAdd = add(10, 20);
let resultFromCalc = calculator.add(10, 20);
console.log(result);
