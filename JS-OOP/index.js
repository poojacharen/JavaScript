// Prototypes

// Iterating Instance and Prototype Members
// Instance members are properties and methods defined directly on the instance.
// Prototype members are properties and methods defined on the prototype of the constructor function.

function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 - new Circle(1);

//  Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

c1.draw();

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instace + prototype) // instance are also known as own properties
for (let key in c1) console.log(key);





