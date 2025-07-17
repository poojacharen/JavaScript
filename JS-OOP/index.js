// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Method Overriding
// This means that a child class can override methods defined in the parent class
// In this example, we have a Shape class and two derived classes : Circle and Square

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
    Shape.prototype.duplicate.call(this); // we used this to call the parent method
    console.log('duplicate circle');
}

const c = new Circle();
