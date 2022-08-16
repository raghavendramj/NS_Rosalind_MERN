function basicProtoExample() {
  function Student() {
    this.name = "John";
    this.gender = "Male";
  }
  var student1 = new Student();
  console.log("Student 1's age :- ", student1.age); //15

  var student2 = new Student();
  console.log("Student 2's age :- ", student2.age); //undefined

  Student.prototype.age = 15;

  console.log("Student 1 :- ", student1);
  console.log("Student 2 :- ", student2);
  console.log("Student 1's age :- ", student1.age);
  console.log("Student 2's age :- ", student2.age);
}

function understandingProtoIndepth() {
  function Student() {
    this.name = "John";
    this.gender = "M";
  }

  Student.prototype.age = 15;
  Student.prototype.nationality = "Indian";

  var studentObject = new Student();
  console.log("Student :- ", studentObject);
  console.log("OBJECT:- student.prototype :- ", studentObject.prototype);
  console.log("FUNCTION:- Student.prototype :- ", Student.prototype);
  console.log("OBJECT:- student.__proto__ :- ", studentObject.__proto__);
  console.log(
    "Student.prototype === student.__proto__ :- ",
    Student.prototype === studentObject.__proto__
  );
  //Every object which is created using literal syntax or constructor syntax with the new keyword,
  //includes __proto__ property that points to prototype object of a function that created this object.
}

// understandingProtoIndepth();

function getPrototypeOfFunction() {
  function Student() {
    this.name = "John";
    this.gender = "M";
  }

  Student.prototype.sayHi = function () {
    return "Welcome to JS";
  };

  var studentObject = new Student();
  console.log("student :- ", studentObject.sayHi());
  console.log("Student.prototype :- ", Student.prototype);
  console.log(
    "Object.getPrototypeOf(student) :- ",
    Object.getPrototypeOf(studentObject)
  );
  console.log("student.__proto__ :- ", studentObject.__proto__);
}

// getPrototypeOfFunction();

function changingProto() {
  function Vehicle() {
    this.brand = "Hyuandai";
    this.model = "Creta";
  }

  Vehicle.prototype.make = "2020";

  var creata1 = new Vehicle();
  console.log("Vehicle :- ", Object.keys(creata1));
  console.log("creata1.make :- ", creata1.make);

  Vehicle.prototype.make = "3022"; //We can change the prototype's value

  console.log("creata1.make :- ", creata1.make);
}
changingProto();

//Prototype's Usage:- 
//1) to find properties and methods of an object
//2) to implement inheritance in JavaScript.
