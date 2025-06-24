// Objects

// Constructor Functions
// They are used to create objects with a specific structure and behavior.
// They can be used to create multiple instances of an object with the same properties and methods.
// Use pascal notation for constructor function names.

function Circle(radius) 
{
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

// Difference between Factory Functions and Constructor Functions:

// Factory Functions:
// They are regular functions that return an object
// They can return different objects based on the input parameters
// They can have any name, but it is common to use camelCase notation

// Constructor Functions:
// They are special functions that are used with the new keyword
// They always return a new object, even if you don't explicitly return one
// They should be named using PascalCase notation
