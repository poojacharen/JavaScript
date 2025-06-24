// Objects

// Cloning an Object:
// It means creating a new object with the same properties as an existing object.
// This can be done using various methods such as Object.assign(), spread operator or JSON methods



const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

const another = Object.assign({}, circle);

const another = { ...circle };

console.log(another);
