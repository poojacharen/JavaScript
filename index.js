// Exercise

// Stars
// We have a function called showStars with a parameter called rows. 

showStars(5);

function showStars(rows) {
    for (let row = 0; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);

    }
}