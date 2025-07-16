// Prototypes

// Property Attributes
// In JS, properties can have attributes that define their behaviour.
// These attributes can be set using Object.defineProperty().

// 1. Writable : If true, the property can be changed. If false, it cannot be changed.
// 2. Enumerable : If true, the property will show up in loops like for...in. If false, it will not.
// 3. Configurable : If true, the property can be deleted or changed. If false, it cannot be deleted or changed.

let person = { name: 'Pooja' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

person.name = 'John'; // This will not change the name property

console.log(Object.keys(person)); // ['name']