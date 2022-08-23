function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Shape -> duplicate!");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

// Circle.prototype = Object.create(Shape.prototype);
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

var sh = new Shape("Red");
console.log("shape :- ", sh);
const ci = new Circle(10, "Yellow");
console.log("ci.color :- ", ci.color);
