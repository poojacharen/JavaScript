// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Testing the Elements of an Array :
// The length property of an array returns the number pf elements in the array.
// The index of the first element is 0, the second element is 1 and so on...
// The last element of an array can be accessed using the length property minus one.
// The index of the last element is length - 1

const numbers = [1, 2, 3];

// Every : It checks to see if every element in a given array matches the given criteria
// It returns true if all elements match the criteria, otherwise false

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive); // true


// Some : It chceks to see if we have at least one element that matches the given criteria
// It returns true if at least one element matches the criteria, otherwise false

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive); // true




