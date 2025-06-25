console.log("Hello World");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

//          Both loops do same task

// for (let index = 0; index < document.querySelectorAll(".box").length; index++) {
//     const element = document.querySelectorAll(".box")[index];
//     document.querySelectorAll(".box")[index].style.backgroundColor = "green";
// }