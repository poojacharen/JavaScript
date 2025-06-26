// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Finding Elements (Primitive Types):
// It really depends what we store in an array wheteher it's a primitive or reference type.

const numbers = [1, 2, 3, 1, 4];

// The indexOf() method : returns the first index at which a given element can be found in the array,
// or -1 if it is not present.

console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(5)); // -1
console.log(numbers.indexOf(1, 2)); // 3 // this will start searching from index 2 and return the first occurrence of 1 after that index 



// The lastIndexOf() method : returns the last index at which a given element can be found in the array,
// or -1 if it is not present.

console.log(numbers.lastIndexOf(1)); // 3
console.log(numbers.lastIndexOf(5)); // -1
console.log(numbers.lastIndexOf(1) !== -1); // true

// The includes() method : determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.

console.log(numbers.includes(1)); // true

