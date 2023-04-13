//let string ="*";
//let ages =prompt("How many times do you want * to appear on the page");
//console.log(string * ages)
let num = prompt("Pick how many times to print *");
console.log("You picked "+ num+ " times")

for (let i = 0; i < num; i++) {
  document.write("*");
}