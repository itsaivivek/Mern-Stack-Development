let textarr = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]
let div = document.createElement("div")
let i = 0
let rand;
getrandomDelay = () => {
    rand = 1000* (1 + 6 * Math.random())
    return rand;
}

console.log(rand);
function inserting(textarr) {
    let timerId = setInterval(() => {
        div.innerHTML += `<p class = "text">\>\> ${textarr[i]}</p>`
        document.body.append(div);
        i++;
        if(i == 5){
            clearInterval(timerId)
            setTimeout(() => {
                
                Array.from(div.children).forEach((e) => {
                  e.classList.remove("text");
                }
                )
            }, 2000);
        }
    }, (getrandomDelay()))

}


inserting(textarr)


