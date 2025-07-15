// Objects

// Enumerating Properties

function Circle(radius) {
    this.radiud = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// To enumerate all the members in an object we can use "for in" loop 
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// to get all the keys use "object.keys"
const keys = Object.keys(circle);
console.log(keys);

// check for the existence of a property or a method in an object use the "in" operator
if('radius' in circle)
    console.log('Circle has a radius.');

