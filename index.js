// Operators 
// In JS there are different kinds of operators. We use this operators along with our variables
// and constants to create expressions. And with these expressions we can implement logic and algorithms
// Operators & variables --> Expressions --> Algorithms

// Different kinds of operators
// Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators 

// 6. Bitwise Operators
// They are used to perform operations on binary numbers

// 00000001 // 1
// 00000010 // 2

// Bitwise AND (&)
// The bitwise AND operator (&) compares each bit of two numbers and returns a new number
// with bits set to 1 only where both numbers had their bits set to 1.

let a = 5; // 00000101
let b = 3; // 00000011
let c = a & b; // 00000001

console.log(c); // 1

// Bitwise OR (|)
// This operator compares each bit of two numbers and returns a new number
// with bits set to 1 where at least one of the numbers had its bit set to 1

let d = 5; // 00000101
let e = 3; // 00000011
let f = a | b; // 00000111

console.log(f); // 7



// Note : refer codewithmosh course for more details on bitwise operators 

















