// Objects

// Constructor Functions
// when we use new keyword to call the function in the constructor function 3 things happen :
// 1. new operator will create an empty object
// 2. it will set this to point to that object and 
// 3. finally it will return that object from the function


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
another.draw(); // draw