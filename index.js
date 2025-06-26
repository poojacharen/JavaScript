// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Iterating an Array
// The for loop is the most common way to iterate over an array


const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number); // 1 // 2 // 3

// The forEach() method calls a function for each element in the array

numbers.forEach((number) => console.log(number)); // 1 // 2 // 3

numbers.forEach((number, index) => console.log(index, number)); // 0 1 // 1 2 // 2 3


