// Objects

// Add or Removing Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(10);

// Add property

circle.location = { x: 1 };
// or
circle['location'] = { x: 1 };

// Also, the above can be written as 

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

// Delete Property

delete circle.location;
//or
delete circle['location'];


