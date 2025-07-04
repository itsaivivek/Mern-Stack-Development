// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

const hasUpperCase = (str) => {
    return /[A-Z]/.test(str);
}
const hasLowerCase = (str) => {
    return /[a-z]/.test(str);
}
const hasDigit = (str) => {
    return /[0-9]/.test(str);
}

let passwordValidator = (password) => {
  // console.log(hasUpperCase(password))
// console.log(hasLowerCase(password))
// console.log(hasDigit(password))
if (password.length >= 8) {
    if (hasUpperCase(password)) {
        if (hasLowerCase(password)) {
            if (hasDigit(password)) {
                console.log("Your password is strong")
            } else {
                console.log("Your password should contian atleast one digit")
            }
        } else {
            console.log("Your password should contain atleast one lowercase letter")
        }
    } else {
        console.log("Your password should contain atleast one uppercase letter")
    }
}
else {
    console.log("Your password should be atleat 8 characters long");
}
}

let password = "Harrybhai69"
passwordValidator(password);
