// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Mapping an Array :
// An array can be mapped to a new array by applying a function to each element of the original array.
// This is done using the 'map' method.

const numbers = [1, -1, 2, 3];

// Mapping an element with strings 

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '<li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html); // <ul><li>1<li><li>2<li><li>3<li></ul>


// Mapping an element with objects
// The below method is called chaining, where we can apply multiple methods on the same array.

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items) ; // [2, 3]


