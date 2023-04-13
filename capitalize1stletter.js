// Prompt the user for input
let inputString = prompt("Enter a string to capitalize the 1st letter of each sentence:");
console.log("The string you picked is " + inputString )

// Split the input string into an array of sentences
let sentences = inputString.split(". ");

// Loop through each sentence in the array
for (let i = 0; i < sentences.length; i++) {
  // Capitalize the first letter of each sentence
  sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
}

// Join the modified sentences back into a single string
let modifiedString = sentences.join(". ");

// Log the modified string to the console
console.log("Modified string: " + modifiedString);