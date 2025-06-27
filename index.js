// Functions :

// Hoisting 
// It is the process of moving function declarations to the top of the file

// Function Declaration 

walk();

function walk() {
    console.log('walk');
}


// Function Expression 

run();

const run = function() {
    console.log('run');
};

