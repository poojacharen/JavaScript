// ES6 Classes :

// The "this" Keyword
// The "this" keyword refers to the object that is executing the currennt function

'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
};

const c = new Circle();

// Method Call // "this" refers to the object that is executing the current function
c.draw();

const draw = c.draw;

// Function Call
draw(); // undefined in strict mode, global object in non-strict mode



// Another example

class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw(); //  op - undefined
   