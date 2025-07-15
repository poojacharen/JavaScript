

// const number = sum([1, 2, 3, 4]);

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));
