// Exercise - 1 : Address Object

// Create an address object with three properties : 
// street, city and zipCode. When doing it create a function called showAddress that takes an address object and displays all 
// the properties in this object along with their value



let address = {
    street: 'Rahman',
    city: 'Chennai',
    zipCode: 600107
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);