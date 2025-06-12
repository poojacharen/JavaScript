// Functions are one of the fundamental building blocks in JS 
// It is basically a set of statements that performs a task or calculates a value

// Boring type
function greet() {
     console.log("Hello My World!!!");
}

greet(); // Calling the function // Output: Hello My World!!!

// The above method is simply boring!!

// Functions can have inputs and these inputs can change how the function behaves 

// Interesting type
function greet(name, lastName) // variable as a parameter
{
    console.log("Hello " + name + " " + lastName);

}

greet("Pooja", "Nagallapati"); // Calling the function with an argument // Output: Hello Pooja Nagallapati
greet("Poojitha", "Raju") // Calling the function with another argument // Output: Hello Poojitha Raju