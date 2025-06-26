function createCard(title, cName, views, monthsOld, duration, thumbnail){
let js_thumbnail = document.getElementsByClassName("css-thumbnail");
Array.from(js_thumbnail).forEach(e => {
    // e.style.backgroundImage = 'url(' + thumbnail + ')';
    // both methods are same
    e.style.backgroundImage = `url(${thumbnail})`;
});

let js_title = document.getElementsByClassName("css-title");
Array.from(js_title).forEach(e =>{
    // console.log(e.textContent)
    e.replaceWith(title)
});

let js_cName = document.getElementsByClassName("css-cName");
Array.from(js_cName).forEach(e => {
    e.replaceWith(cName);
});

let js_views = document.getElementsByClassName("css-views");
Array.from(js_views).forEach(e =>{
    // console.log(e.textContent)
    // let num = 7200000;
    let num = views;
    let num1;
    if(num<1000){
        num1 = num
        e.replaceWith(`${num1} ${"views"}`)
    }
    else if(num>=1000 && num<1000000){
        num1 = num/1000;
        e.replaceWith(`${num1}${"K"} ${"views"}`);
    }
    else if(num>=1000000 && num<1000000000){
        num1 = num/1000000;
        e.replaceWith(`${num1}${"M"} ${"views"}`);
    }
    else if(num>=1000000000){
        num1 = num/1000000000;
        e.replaceWith(`${num1}${"B"} ${"views"}`);
    }
    else{
        e.replaceWith(`${views} ${"views"}`);
    }
});

let js_monthsOld = document.getElementsByClassName("css-monthsOld");
Array.from(js_monthsOld).forEach(e => {
    // e.replaceWith(`${monthsOld} ${"months ago"}`);
    //We can use this method also
    e.innerHTML = `${monthsOld} ${"months ago"}`
});

let js_duration = document.getElementsByClassName("css-duration");
Array.from(js_duration).forEach(e => {
    e.innerHTML = duration
});

}

console.log("In the console, you can call a function by writing createCard(\"your title\", \"channel name\", views, months ago, \"duration\", \"url of thumbnail.\") \n Here the things between \"\" is string so you have to write double quote also. This function can dynamically used to change the whole thing in this card")

// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:12", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
