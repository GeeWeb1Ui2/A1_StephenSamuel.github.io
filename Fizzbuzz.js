
let number1 =prompt("Input number 1 (between 1 & 200)- (fizz)");
alert("Number 1 is "+ number1)
let number2 =prompt("Input number 2 (between 1 & 200)- (buzz)");
alert("Number 2 is "+ number2)
for (let a=1;a<51;a=a+1)
{
if (a%number1==0){
    
    if(a%number2==0)
    {
        console.log("fizzbuzz")
    }
    else {
        console.log("fizz")
    }
}
else if (a%number2==0)
{
    console.log("Buzz.")
}

else 
{
    console.log(a)
}
}