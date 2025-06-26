// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Removing Elements :
// It is possible to remove elements from an array using the splice() method.

const numbers = [1, 2, 3, 4];

// End

const last = numbers.pop(); // removes the last element
console.log(numbers); // [1, 2, 3]
console.log(last); // 4

// Beginning 

const first = numbers.shift(); // removes the first element
console.log(nunbers); // [2, 3, 4]
console.log(first); // 1

// Middle 

numbers.splice(2, 1); // removes the elemnt at index 2 
console.log(numbers); // [1, 2, 4]

numbers.splice(2, 2);
console.log(numbers); // [1, 2]
