// Exercise - 2 : Factory and Constructor Functions

// Initialize an address object, first using a factory function and then using a constructor function. 
// We need to write two different functions for this exercise 


let address = {
    street: 'Rahman',
    city: 'Chennai',
    zipCode: 600107
};

console.log(address);


// Factory Function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}


// Constructor Function

function UpdateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  
}