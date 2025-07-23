// ES6 Tooling

// ES6 Modules :

const_radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}
