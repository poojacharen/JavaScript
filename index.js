// Exercise 2 : Area of Circle

// Create a circle object using the object literal syntax. 
// The object should have a radius property that we can read or write too
// For eg : circle.radius = 2;
//         console.log(circle.area);


const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area); 


