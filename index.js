// Exercise

// Speed Limit = 70 - ok 
// speed increases by 5km  -> 1 point
// Math.floor(1.3)
// when they reach 12 points -> license get suspended

let speed = checkSpeed(200);
console.log(speed);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        
        console.log('Ok');
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
        
    if (points >= 12)
            console.log('License Suspended');
        
    else
            console.log('Points', points);
    }




