let obj1 = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
};

let obj2 ={
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
};

let obj3 = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
};

let rand1 = Math.floor((Math.random()*3)+1);
let rand2 = Math.floor((Math.random()*3)+1);
let rand3 = Math.floor((Math.random()*3)+1);

// console.log(obj1[rand1] + " " + obj2[rand2] + " " + obj3[rand3]);
console.log(`${obj1[rand1]} ${obj2[rand2]} ${obj3[rand3]}`);