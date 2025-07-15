// Objects

// Private Properties and Methods

function Circle(radius){
    this.radius = radius;
    
    let defaultlocation = { x: 0, y: 0 };

    let computeoptimumLocation = function(factor) {
        // ...
    }

    this.draw = function() {
        computeoptimumLocation(0.1);

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();


