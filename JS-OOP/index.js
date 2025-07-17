// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Resetting The Constructor
// When you create a new object using a constructor function, the prototype chain is set up.
// However, if you create a new object using Object.create(), the constructor property is not set to the constructor function.
// To fix this, you can reset the constructor property of the prototype to point to the constructor function.

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
    this.radius = this.radius;
}

// Circle.prototype.constructor = Circle; 
// new Circle.prototype.constructor() => new Circle()

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;  // we need to reset the constructor when using the Object.create method

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
