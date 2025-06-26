// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Emptying an Array :
// There are several ways to empty an array in JS
// 1. Setting the length to 0
// 2. Reassigning to a new empty array
// 3. Using splice method
// 4. Using pop method in a loop
// 5. Using shift method in a loop
// 6. Using a filter method to filter out all elements


let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 : this method is recommended when we have only one reference to the array
numbers = [];
console.log(numbers); // []
console.log(another); // [1, 2, 3, 4]

// Solution 2 : This method is also recommended when we have multiple references to the array

numbers.length = 0;
console.log(numbers); // []
console.log(another); // [1, 2, 3, 4]

// Solution 3 

numbers.splice(0, numbers.length);
console.log(numbers); // []
console.log(another); // [1, 2, 3, 4]

// Solution 4

while (numbers.length > 0)
    numbers.pop();

console.log(numbers); // []
console.log(another); // [1, 2, 3, 4]

