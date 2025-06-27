// Functions :

// Arguments

function sum(a,b) {
    return a + b;
}

console.log(sum(1, 2)); // op - 3
console.log(sum(1)); // op - NaN : why because 1 + undefined
console.log(sum()); // op - NaN
console.log(sum(1, 2, 3, 4, 5)); // op - 3


// By using Arguments

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10)); // op - 25
