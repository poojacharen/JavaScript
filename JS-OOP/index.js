// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Calling the Super Constructor 
// In JS, we can create a prototype chain where one object can inherit properties and methods from another object.
// This is done using the 'Object.create()' method, which creates a new object with the specified prototype object and properties.

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);  // Call the super constructor to initialize the color property
    this.radius = radius;
}

// Circle.prototype.constructor = Circle; 
// new Circle.prototype.constructor() => new Circle()

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;  // we need to reset the constructor when using the Object.create method

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'blue');
