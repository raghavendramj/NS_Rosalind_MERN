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
  Shape.call(this, color);
  this.area = area;
}

Rectangle.prototype = Object.create(Shape.prototype);
console.log("Before Rectangle.prototype.constructor -> ", Rectangle.prototype.constructor);
Rectangle.prototype.constructor = Rectangle;
console.log("After Rectangle.prototype.constructor -> ", Rectangle.prototype.constructor); 

// const rect = new Rectangle("Red", 12, 6, 72);
// console.log("Rect object :- ", rect);
// console.log("Rect color :- ", rect.color);

// const fourSides = new FourSides("Yellow", 4, 6);
// console.log("FourSides object :- ", fourSides);
// console.log("FourSides object :- ", fourSides.color);
