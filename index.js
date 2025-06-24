// Objects

// Value vs Reference Types :
// - Value types are stored in the stack and are copied by value
// - Reference types are stored in the heap and are copied by reference
// value types : number, string, boolean, null, undefined, symbol
// refernce types : object, array, function, date, regex

// example 1
let x = 10;
let y = x;

x = 20; // both x and y are independent // x = 20, y = 10


// example 2
let x = { value: 10 };
let y = x;

x.value = 20 // both x and y point to the same object in memory // x = 20, y = 20



// example 3
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // op - 10 // number is passed by value, so the original value is not changed


// example 4
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // op - { value: 11 } // obj is passed by reference, so the original value is changed