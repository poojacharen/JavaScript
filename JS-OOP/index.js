// Prototypes

// Constructor Prototypes

// This is a constructor function
// It is used to create objects with a specific structure
// The structure is defined by the properties nad methods within the function

// eg:

function Person(name, age) {
    this.name = name; // 'this;' refers to the instance of the object being created
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person object

const person1 = new Person('John', 30);

// Accessing properties and methods of the object

console.log(person1.name); // Output: John

