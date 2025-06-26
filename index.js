// Exercise 1 : Array from Range

// Write a function called arrayFromRange. 
// This function should take two parameters - min and max

const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for(let i = min; i <= max; i++) 
        output.push(i);
    return output;
    
}

