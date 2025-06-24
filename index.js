// Objects

// Constructor Property
// The constructor property of an object is a reference to the function that created the instance's prototype.
// It is a way to access the constructor function that was used to create the object.
// This property is automatically set when an object is created using a cnstructor function or a class.


// Example: 

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3...

// Example of constructor property

function Person(name) {
    this.name = name;
    this.age = 0;
    }

    const person = new Person('Pooja');
    console.log(person.constructor); // [Function: Person]
 
    
