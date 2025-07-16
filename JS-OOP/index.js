// Prototypes

// Multi-level Inheritance
// This means that a class can inherit from another class, which in turn can inherit from another class and so on...

// Eg: 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(10);

// How is multi-level achieved from the above example?
// Circle is a class, and another is an instance of circle.



