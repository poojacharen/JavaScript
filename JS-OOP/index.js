// ES6 Classes :

// Static Methods
// Static methods are called on the class itself, not an instances of the class.
// They are often used for utility functions that are related to the class but not require an instance.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method // they are defined on the instance of the class and uses 'this' keyword
    draw() {

    }

    // Static Method // they are defined on the class iteself and uses 'static' keyword

    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);


// another example of static method

class Math2 {
    static abs(value) {
        //...
    }
}

Math2.abs() // This is how you call a static method, directly on the class without creating an instance