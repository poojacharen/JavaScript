// Exercise 4 : Moving an Element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offseet) {
    const position = index + offseet;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}