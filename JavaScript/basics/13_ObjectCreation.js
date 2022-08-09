function firstWay() {
  // 1st Way -> Factory function
  function createCircle(raduis) {
    return {
      raduis,
      draw: function () {
        console.log("Factory fuction- DRAW", this.raduis);
      },
    };
  }
  var facCricle1 = createCircle(10);
  console.log(facCricle1);
  var facCricle2 = createCircle(23);
  console.log(facCricle2);
}


// A constructor returns an instance of the class you call it on
function secondWay() {
  //2nd Way -> Constructor function
  function Cricle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("Circle -> Constructor function - DRAW ", this.radius);
    };
  }
  var circle1 = new Cricle(45);
  console.log(circle1);
  circle1.draw();

  // 1. new -> create an empty object {}
  // 2. it will set that empty object to that current object
  // 3. returns the object from the function
  // The above 3 steps happens in sequence and automatically

  function Employee(id, fname, lname, city, email) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function () {
      return this.fname + " " + this.lname;
    };
  }

  var employee1 = new Employee(1, "raghav", "mj", "bangalore", "test@gmail.com");
  var employee2 = new Employee(2, "keshav", "anand", "madikeri");
  console.log("employee1 -> ", employee1);
  console.log("employee1.fullName() -> ", employee1.fullName());
  console.log("employee2 -> ", employee2);
  console.log("employee2.fullName() -> ", employee2.fullName());
}
secondWay();

function Rectangle(len, bdth) {
  'use strict'; // -> empty -> {} <- this
  this.length = len;
  this.breadth = bdth;
  this.getArea = function(){
      return this.length * this.breadth;
  }
  console.log("Finally Object:- ", this);
}
var obj = new Rectangle(10, 5);