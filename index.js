// Exercise

// Prime Numbers
// Create a function called showPrimes, that takes a limit and shows all the prime numbers up to this limit. 

// Prime (whose factors are only 1 and itself)
// coposite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number < limit; number++) 
         
        
        if (isPrime(number)) console.log(number);
    
    
    
}

function isPrime(number) {
    
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
        
    
    return true;
}