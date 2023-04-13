// Prompt the user for input
let inString = prompt("Enter a string to remove a word from:");
alert("The String you entered is "+ inString)

// Prompt the user for a word or text to remove
let remText = prompt("Enter the word or text to remove:");
alert("The String you entered is "+ remText,"")

// Replace the removeText with an empty string
let modString = inString.replace(remText);

// Log the modified string to the console
console.log("Modified string: " + modString);