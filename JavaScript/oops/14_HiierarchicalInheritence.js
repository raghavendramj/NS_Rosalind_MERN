function Shape(color) {
  console.log("Shape Function!");
  this.color = color;
}

function FourSides(color, length, breadth) {
  console.log("FourSides Function!");
  Shape.call(this, color);
  this.length = length;
  this.breadth = breadth;
}

FourSides.prototype = Object.create(Shape.prototype);
FourSides.prototype.constructor = FourSides;

function Rectangle(color, length, breadth, area) {
  console.log("Rectangle Function!");
  FourSides.call(this, color, length, breadth);
  this.area = area;
}

Rectangle.prototype = Object.create(FourSides.prototype);
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle("Red", 12, 6, 72);
console.log("Rect object :- ", rect);
console.log("Rect object :- ", rect.color);
