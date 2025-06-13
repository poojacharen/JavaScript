// Operators 
// In JS there are different kinds of operators. We use this operators along with our variables
// and constants to create expressions. And with these expressions we can implement logic and algorithms
// Operators & variables --> Expressions --> Algorithms

// Different kinds of operators
// Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators 

// 4. Equality Operators 
// In JS we have two equality operators: == and ===

// Strict Equality Operator (===) : Tis ensures that both these values are equal and of the same type

console.log(5 === 5); // true
console.log('5' === 5); // false // because the type is different 

// Loose Equality Operator (==) : This operator checks for equality but does not consider the type of the values

console.log(5 == 5); // true
console.log('5' == 5); // true // because it converts the string to a string and then compares 
console.log(true == 5); // true // because it converts true to a boolean and then compares 

// Note : It is generaly recommended to use the strict equality operator (===)
















