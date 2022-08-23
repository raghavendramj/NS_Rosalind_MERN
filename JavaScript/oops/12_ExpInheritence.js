function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  //Instance of the object -> as this....
  return this.firstName + " " + this.lastName;
};

function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName); //Links the class Person with Student
  this.schoolName = schoolName;
  this.grade = grade;
}

// Student.prototype -> Person.prototype
Student.prototype = new Person();
Student.prototype.constructor = Student;

var studObj = new Student("James", "Bond", "JimmySchool", 10);
// console.log(studObj);
console.log("instanceof Student :- ", studObj instanceof Student);
console.log("instanceof Person :- ", studObj instanceof Person);
console.log("instanceof Person :- ", studObj instanceof Object);

//Inheritence Explained!
//Student.prototype -> Object.prototype
//Student.prototype -> Person.prototype -> Object.prototype
