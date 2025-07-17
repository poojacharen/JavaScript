// Prototypical Inheritance
// This represents a simple example of prototypical inheritance in JS

// Mixins
// This means that we can add properties and methods to an object after it has been created.
// This is useful for adding functionality to objects without modifying their constructor.

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

function Person() {
}

mixin(Person.prototype, canEat, canWalk);

const Person = new Person();
console.log(person);

function Goldfish() {
}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);


