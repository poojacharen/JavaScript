// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Creating your own Prototypical Inheritance


function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
    this.radius = this.radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
