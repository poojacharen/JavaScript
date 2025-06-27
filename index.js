// Functions :

// Function Declarations Vs Expressions :

// In JS, there are 2 ways to declare a function
// 1. We can use the function declaration syntax or
// 2. function expression, 
// which basically involves declaring a variable or a constant and then setiing it to a function


// Function Declarartion

function walk() {
    console.log('walk');
}


// Anonymous Function Expression

const run = function() {
    console.log('run');
};
let move = run;
run();
move();