function calculator(operation, ...params) {
  let result = operation(params);
  displayResults(result);
  function displayResults(res) {
    console.log("Passed results :- ", res);
    console.log("Closure results :- ", result);
  }
}

//function displayResults -> lexically inside the function calculator
//lexical env  ->{ identifer: value, identifier: function object}
// So, in Execution context of displayResults (res) +  reference of lexical env of parent calcutor is there...
