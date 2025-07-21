// ES6 Classes :

// Private Members Using Symbols 
// This is a way to create private members in ES6 classes using symbols
// This is not a true private member, but it is a way to create a member that is not easily accessible

const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw] () {

    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);




   