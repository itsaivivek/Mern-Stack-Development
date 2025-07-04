// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let string = "VIvekBhatt"
let vowelsArray = ["a", "e", "i", "o", "u"];

let vowelsInSting = (vowelsArray) => {
    let vowels = []
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < vowelsArray.length; j++) {
            if ((string[i] == vowelsArray[j]) || (string[i] == vowelsArray[j].toUpperCase())) {
                vowels.push(string[i]);
            } else {
                continue;
            }
        }
    }
    return vowels;
}

console.log("The vowels in the strings are:", vowelsInSting(vowelsArray));

