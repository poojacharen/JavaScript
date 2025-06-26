// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Combining and Slicing Arrays :
// The concat() method is used to join two or more arrays.
// It returns a new array without modifying the existing arrays


const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]

const slice = combined.slice(2, 4);
console.log(slice); // [3, 4]

const slice = combined.slice();
console.log(slice); // [1, 2, 3, 4, 5, 6]


// If we hae reference types 

const first1 = [{ id: 1 }];
const second1 = [4, 5, 6];

const combined = first.concat(second1);
first[0].id = 10;
console.log(combined); // [{ id: 10 }, 4, 5, 6]

const slice = combined.slice();
console.log(slice); // [{ id: 10 }, 4, 5, 6]

const slice = combined.slice(2, 4);
console.log(slice); // [5, 6]

