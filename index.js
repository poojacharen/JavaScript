// Arrays :
// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.


// Finding Elements (Reference Types): ie; Objects
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// The includes() method determines whether an array includes a certain elemet, returning true or false as appropriate.
// The find() method returns the value of the first element in the previous array that satisfies the provided testing function.
// Otherwise undefined is returned.
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.


const courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Azure' },
];

// find() method :
// eg : 1
const course = courses.find(function(course) {
    return course.name === 'JavaScript';
});

console.log(course); // { id: 1, name: 'JavaScript' }

// eg: 2
const course = courses.find(function(course) {
    return course.name === 'xyz';
});

console.log(course); // undefined



// findIndex method :
// eg : 1

const courseIndex = courses.findIndex(function(course) {
    return course.name === 'JavaScript';
});

console.log(courseIndex); // 0

// eg : 2
const courseIndex = courses.findIndex(function(course) {
    return course.name === 'xyz';
});

console.log(courseIndex); // -1