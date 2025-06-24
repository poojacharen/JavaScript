// Objects

// Template Literals :
// They are powerful and flexible, allowing for easy string interpolation and multi-line strings.
// They are enclosed by backticks (``) instead of single or double quotes.
// They can contain placeholders, which are indicated by the dollar sign and curly braces ${expression}

const name = 'Pooja';
const message = 'Hi ' + name + ',\n';

// Using template literals

const another =
`Hi ${name} ${2 + 3},

Thank you for joining the team.

Regards,
Pooja`;

console.log(another);