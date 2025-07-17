// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Intermediate Function
// This function will be used to create a prototype chain between Shape and Circle
// It allows Circle to inherit properties and methods from Shape
// Shape is the parent class and Circle is the child class


function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);  
    this.radius = radius;
}

extend(Circle, Shape);


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;  

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'blue');
const sq = new Square(10);
