// Objects

// Enumerating Properties of an Object
// Object.keys(obj) - returns an array of the object's own enumerable property names
// Object.values(obj) - returns an array of the object's own enumerable property values
// Object.entries(obj) - returns an array of the object's own enumerable property [key, value] pairs
// Object.getOwnPropertNames(obj) - returns an array of all properties (enumerable or not) found directly upon a given object


const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('color' in circle) console.log('yes');


