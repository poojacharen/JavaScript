// Exercise

// Write a function called countTruthy which takes an array and returns a number of truthy elements in this array


const array = ["Pooja", "Charen", "Sai"];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;

}