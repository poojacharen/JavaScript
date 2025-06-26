// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Arrow Functions :
// Arrow functions are a more concise syntax for writing function expressions in JS.
// They are anonymous and change the way this binds in functions.
// They do not their own context, so they cannot be used as constructors.
// They are not hoisted, so they cannot be called before they are defined.


const courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Azure' },
];

const course = courses.find(course => course.name === 'JavaScript');

console.log(course); // { id: 1, name: 'JavaScript' }

