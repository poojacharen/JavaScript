// Exercise

// Write a function showNumbers that takes a parameter called 'limit'. Should display 'even' if its a even number and 'odd'
// if its a odd number
// expected output : 0 "EVEN"
//                   1 "ODD" ...... 10 "EVEN"


showNumbers(10);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, "EVEN");
        else
            console.log(i, "ODD");


        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    
    }

}



