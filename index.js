// Objects

// Dynamic Nature of Objects
// Objects in JavaScript are dynamic, meaning you can add, modify, or delete properties at
// any time. This flexibility allows for a wide range of programming styles and patterns.


const circle = {
    radius: 1
};

circle.color = 'yellow'; // Adding a new property 'color' to the circle object
circle.draw = function() {} // Adding a new method 'draw' to the circle object

delete circle.color;
delete circle.draw;

console.log(circle);
