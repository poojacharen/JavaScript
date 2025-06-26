// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Filtering an Array : It is based on the search criteria
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// This method returns a new array, and does not change the original array.
// Syntax : 
// array.filter(callback(element[, index[, array]])[, thisArg])

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered); // [1, 2, 3]



