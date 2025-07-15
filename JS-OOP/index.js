// Objects

// Getters and Setters

function Circle(radius){
    this.radius = radius;
    
    let defaultlocation = { x: 0, y: 0 };
    
    this.defaultlocation = function() {
        return defaultlocation;
    };

    this.draw = function() {
       console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultlocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultlocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultlocation = 1; // output - invalid error
circle.draw();


