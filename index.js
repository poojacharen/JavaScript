// Objects

// Factory Functions
// A factory function is a function that returns an object. 
// It is a way to create objects without using the 'new' keyword or constructor functions.
// Factory functions can be used to create multiple instances of an object with similar properties and methods.

// Example of a factory function to create a circle object

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);