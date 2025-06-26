console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
let boxes = document.querySelector(".container").children

// a + r (b-a)
//here r is random number
// when r = 0 we get value of a
// when r = 1 we get value of b
// when r = 2,3,4,... we get value between a and b
// in case of rgb a will be 0 and b will be 255 
// so 0 + Math.random()* 255 ---> gives random floating number between 0 and 255
// so we use Math.ceil to get integer number 

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})