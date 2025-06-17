// Exercise

// Sum of multiples of 3 and 5
// Create a function called sum, we give it a limit and this function will return the sum of all the multiples of
// 3 and 5 from 0 upto to the given limit

// Multiples of 3 : 3, 6, 9
// Multiples of 5 : 5, 10


console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for(let i = 0; i <= limit; i++) 
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
       
    
}