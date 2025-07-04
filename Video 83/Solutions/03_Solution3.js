// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let string = "Vivek"

let reverse_append = (string) => {
    let reversedString = string.split('').reverse().join(''); //This method converts the string into an array of individual characters
    return string.concat(reversedString);
}

console.log(reverse_append(string));

