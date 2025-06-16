/* Create a faulty Calculator using JavaScript 
This faulty calculator does following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
        + ---> -
        * ---> +
        - ---> /
        / ---> **
It performs wrong operation 10% of the times.
*/

// This can generate random number from 0 to 1
random = Math.random();
// console.log(random);

// prompt only works in browser
// let a = prompt("Enter number a ");
// let b = prompt("Enter number b ");
let a = 5;
let b = 4;

if (random<0.1) {
    console.log("The addition of a and b is", diff(a,b))
    // console.log("The addition of a and b is "+ (a+b)) //Both are same but + is used for string concatenate and comma for number it automatically add space before.

    console.log("The subtraction of a and b is", division(a,b))
    console.log("The multipliction of a and b is", sum(a,b))
    console.log("The division of a and b is", expo(a,b))
    
}
else{
    console.log("The addition of a and b is", sum(a,b))
    console.log("The subtraction of a and b is", diff(a,b))
    console.log("The multipliction of a and b is", product(a,b))
    console.log("The division of a and b is", division(a,b))
}
function sum(a, b) {
    return(a+b);
}
function diff(a, b) {
    return(a-b);
}
function product(a, b) {
    return(a*b);
}
function division(a, b) {
    return(a/b);
}
function expo(a, b) {
    return(a**b);
}
