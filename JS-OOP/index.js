// Objects

// Value Vs Reference Types :
// Primitive types or Values are copied by their values
// Objects or Reference Types are copied by their reference

// Eg : 1

let x = 10;
let y = x;

x = 20; // output: x - 20, y - 10

// Eg : 2

let a = {value: 10};
let b = a;

a.value = 20; // output: a - {value: 20}, b - {value: 20}

// Eg : 3

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // output : 10

// Eg : 4

let obj = { value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // output : {value: 11}

