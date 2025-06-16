// Control flow

// There are two types of conditions
// if...else
// switch...case

// if...else

if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) 
    statement
else
    statement


// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evevning!

let hour = 14;  // we can change the number to see which day of the time we are in (morn, aftrnoon, eve)

if (hour >=6 && hour < 12) {
    console.log("Good Morning!");
}
else if(hour >=12 && hour < 18) {
    console.log("Good Afternoon!");
}
else
    console.log("Good Evening!");

















