// Functions are one of the fundamental building blocks in JS 
// It is basically a set of statements that performs a task or calculates a value

// Types of functions in JS

// Performing a task
function greet(name, lastName) // variable as a parameter // name and lastName are parameters
{
    console.log("Hello " + name + " " + lastName);

}
greet("Pooja", "Nagallapati") // output: Hello Pooja Nagallapati // calling the function with arguments

// Calculating a value
function square(number) // variable as a parameter
{
    return number * number; // returns the square of the number
}

console.log(square(2)); // output: 4

