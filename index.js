// Control flow:

// Loops : repeat an action for no. of times

// For Loop

for (initialization; condition; afterthought) {

}

for (let i = 0; i < 5; i++) {
    console.log("Hello World");
} // output : 5 hello world


for (let i = 0; i < 5; i++) {
     console.log("Hello World", i);
} // output : Hello world 0 .....Hello world 4



for (let i = 1; i <= 5; i++) {
     console.log("Hello World", i);
} // Output : Hello world 1 ... Hello world 5


for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
} // output : 1 3 5 ( we get the odd numbers)

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
} // Output : 5 3 1 ( we get odd numbers in reverse order)


















