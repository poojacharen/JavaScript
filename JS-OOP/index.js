// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Polymorphism - poly means many, morph means forms
// This is the main concept of polymorphism in JS, which allows methods to be used interchangeably between different objects.



function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

function Square() {
}

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.duplicate(); // This will call the duplicate method of Circle or Square based on the object type
}