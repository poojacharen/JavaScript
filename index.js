// Operators 
// In JS there are different kinds of operators. We use this operators along with our variables
// and constants to create expressions. And with these expressions we can implement logic and algorithms
// Operators & variables --> Expressions --> Algorithms

// Different kinds of operators
// Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators 

// Logical Operators with Non - Boolean Values

false || true; // true
false || 'Pooja'; // 'Pooja'
false || 1; // 1 

// Falsy Values in Js
// Falsy values are values that evaluate to false in a boolean context.
// In JS, the following values are considered Falsy:
// false
// undefined
// null
// 0
// ' '
// NaN (Not a number)


// Truthy Values in Js
// truthy values are values that evaluate to true in a boolean context.
// In js, the following values are considered Truthy:
// true
// any non-empty string (eg: 'pooja', '0', 'false')
// any non-zero number (eg: 1, -1, 3.14)

// Short-circuiting
// It is a feature of logical operators where the second operand is not evaluated if the first operand is sufficient to determine the result

false || 1 || 2; // 1

// eg: Let's imagine we are building an application and somewhere the user has to pick a color or we're going to use a default color

// let userColor = 'red';
// let defaultColor = 'blue'
// let currentColor = userColor || defaultColor;

// console.log(currentColor); // red

let userColor = null;;
let defaultColor = 'blue'
let currentColor = userColor || defaultColor;

console.log(currentColor); // blue
























