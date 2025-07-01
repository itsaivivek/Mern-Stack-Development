let a = prompt("Enter first number")

let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
// let sum = a + b
let sum = parseInt(a) + parseInt(b)


function main(){

    try {
        console.log("The sum is ", sum * x)
        return true;
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false;
    }
    finally{
        console.log("files are being closed and db connection id being closed")
    }
    
}

let c = main()