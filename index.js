// Functions :

// Getters and Setters
// It is a special kind of methods

// Getters => access properties
// Setters => change (mutate) them


const person = {
    firstname: 'Pooja',
    lastName: 'Raju',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Poojitha Nagallapati';

console.log(person);


