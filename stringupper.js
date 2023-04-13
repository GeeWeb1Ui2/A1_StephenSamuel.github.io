// Prompt the user for input
let Upcase = prompt("Enter a string in uppercase: ");
alert("The String you entered is "+ Upcase)

let Lowcase = prompt("Enter a string in lowercase: ");
alert("The String you entered is "+ Lowcase)

// Convert the strings to the opposite case
let swdUpcase = Upcase.toLowerCase();
let swdLowcase = Lowcase.toUpperCase();

// Log the swapped strings to the console
console.log("Uppercase string in lowercase: " + swdUpcase);
console.log("Lowercase string in uppercase: " + swdLowcase);

