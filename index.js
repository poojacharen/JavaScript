// Objects

// Functions are Objects :
// Functions are first-class objects in JS. 
// They can be assigned to variables, passed as arguments and returned from other functions and can have properties
// Functions are objects, so they can have properties and methods just like any other object in JS


 function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
 }

 Circle.call({}, 1);
 Circle.apply({}, [1,2,3]);

 const another = new Circle(1);
 

