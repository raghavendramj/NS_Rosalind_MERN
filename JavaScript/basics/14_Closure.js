//A closure gives you access to an outer function's scope from an inner function.

function init() {
  var name = "VSCode";
  var test = "It will die";
  function displayName() {
    console.log("Name of the editor :- ", name);
  }
  return displayName;
}
var myFunc = init();
myFunc();

console.dir(myFunc);
//The method console.dir() displays an interactive list of the properties of the specified JavaScript object.
//The output is presented as a hierarchical listing
//with disclosure triangles that let you see the contents of child objects.

function salaryOfEmployee(salary) {
  //Outer function :- salary
  var salary = salary;
  function changeSalary(amount) {
    //Inner fuction -> CLOSURE -> salary
    //A closure gives you access to an outer function's scope from an inner function.
    salary += amount;
    console.log("Updated Salary is ", salary);
  }
  var obj = {
    raise: function (value) {
      changeSalary(value);
    },
    lower: function (value) {
      changeSalary(-value);
    },
  };
  return obj;
}

var obj = salaryOfEmployee(20_000);
obj.raise(5000);