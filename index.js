// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Sorting Arrays :
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points.
// The sort() method can take a compare function as an argument to ddfine the sort order.
// The compare functions should return a negative, zero or positive value, depending on the arguments.

// eg: the below is when we have numbers and strings in an array

const numbers = [2, 3, 1];
numbers.sort(); // sorts the elements of an array in place and returns the sorted array
console.log(numbers); // [1, 2, 3]

numbers.reverse(); // reverses the order of the elements in an array
console.log(numbers); // [3, 2, 1]


// eg : the below is when we have objects in an array
// This is a common scenario when dealing with arrays of objects, such as when you have a list of courses and you want to sort them by name.
// 

const courses = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'JavaScript' },
];

courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toLowerCase(); // 
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses); // [{ id: 2, name: 'JavaScript' }, { id: 1, name: 'Python' }]



