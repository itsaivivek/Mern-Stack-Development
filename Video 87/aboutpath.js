import path from "path"

let myPath = "E:\\Sigma Web Development Course\\Mern-Stack-Development\\Video 87\\vivek.txt" // Adding an extra \ so that it will escape sequence \

console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))