// Operators 
// In JS there are different kinds of operators. We use this operators along with our variables
// and constants to create expressions. And with these expressions we can implement logic and algorithms
// Operators & variables --> Expressions --> Algorithms

// Different kinds of operators
// Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators 

// 5. Logical Operators 
// We use this operators to make desicions based on multiple conditions

// There are three types of logical operators 

// 1. Logical AND (&&)
// This operator returns TRUE if both operands are TRUE, otherwise it returns FALSE

console.log(true && true); // true
console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false

// eg: If the applicant has high income and good credit score then they will be eligible for loans.


// let highIncome = true;
// let goodCreditScore = true;

// let eligibleForLoans = highIncome && goodCreditScore;

// console.log(eligibleForLoans); // true

// 2. Logical OR (||)
// This operator returns TRUE if one of the operands is TRUE, otherwise it returns FALSE

// let highIncome = true;
// let goodCreditScore = true;

// let eligibleForLoans = highIncome || goodCreditScore;

// console.log(eligibleForLoans); // true

// or another example

// let highIncome = false;
// let goodCreditScore = true;

// let eligibleForLoans = highIncome && goodCreditScore;

// console.log(eligibleForLoans); // true


// 3. Logical NOT (!) 
// This operator negates the value of the operand. If the operand is TRUE, it returns FALSE and vice versa.

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoans = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoans); // false

// Not (!)
let applicationRefused = !eligibleForLoans;
console.log('Application Refused', applicationRefused); // true


















