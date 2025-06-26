// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.

// Adding Elements 

const numbers = [3, 4];

// End of the array
// This method adds one or more elements to the end of an array and returns the new length of the array.

numbers.push(5, 6);

console.log(numbers); // [3, 4, 5, 6]

// Beginning of the array
// This method ads one or more elements to the beginning of n array and returns the new length of the array.

numbers.unshift(1, 2);

console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Middle of the array
// This method adds one or more elements at a specified index in an array and returns the new length of the array.

numbers.splice(2, 0, 'a', 'b'); // we added 'a' and 'b' at index 2, ie., between 2 and 3 (here 2 is the index of 3)

console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]