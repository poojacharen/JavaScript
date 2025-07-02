// Exercise 1 : Sum of Arguments

// Create a function called sum() that takes a varying number of arguments and returns their sum. 
// We can pass 1, 2, 3 or more -> sum(1, 2, 3...) => 10. We should get 10
// Use Array.isArray()

// Method 1:
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // op - 10
console.log(Array.isArray([1, 2, 3, 4])); // op - true

// Method 2:

console.log(sum(1, 2, 3, 4));

function sum(...args) {
    if (args.length === 1 && Array.isArray(items[0]))
        args = [...args[0]];

    return args.reduce((a, b) => a + b);
}

