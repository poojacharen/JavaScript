// Control flow

// There are two types of conditions
// if...else
// switch...case

// switch...case

swith (expression) {
    case value1:
        break;
    case value2:
        break;
    default:

}

let role;  // We get output as Unknown user but if we declare a value with a variable like (let role = guest) then the op will be Guest User

switch (role) {
    case "guest":
        console.log("Guest User");
        break;
    
    case "moderator":
        console.log("Moderator User");
        break;

    default:
        console.log("Unknown User")

}

// Using if...else with the above condition

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");

















