// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// The Spread Operator :
// The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected.
// It is used to unpack elements from an array or properties from an object.
// It can also be used to combine arrays or objects.
// The spread operator is useful for copying arrays, merging arrays and passing arrays as function arguments.


const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second]; // Using spread operator to combine arrays
console.log(combined); // [1, 2, 3, 4, 5, 6]

const combined = [...first, 'a', ...second, 'b']; // Adding elements while combining
console.log(combined); // [1, 2, 3, 'a', 4, 5, 6, 'b']

// const copy = combined.slice();
const copy = [...combined]; // using spread operator to copy an array
console.log(copy); // [1, 2, 3, 'a', 4, 5, 6, 'b'] 

