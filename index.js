// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Joining Arrays :
// The join() method joins all elements of an array into a string.
// The elements will be separated by a specified separator string.
// If no separator is specified, a comma (,) is used as the default separator.

// Syntax: array.join(separator);

const numbers = [1, 2, 3]
;
const joined = numbers.join(',');
console.log(joined); // 1, 2, 3

const message = 'Hi, How are you?';
const parts = message.split(' ');
console.log(parts); // ["Hi,", "How", "are", "you?"]

const combined = parts.join('-');
console.log(combined); // Hi,-how-are-you?


