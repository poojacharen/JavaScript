// Functions :

// Let Vs Var


// Let 

function start() {
    for (let i = 0; i < 5; i++) 
        console.log(i);

    console.log(i);
}

start();


// Var

function start() {
    for (var i = 0; i < 5; i++) 
        console.log(i);

    console.log(i);
}

start();

// Other eg:

var color = 'red';
let age = 30;

function sayHi() {
    console.log('hi');
}