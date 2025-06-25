function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  let randomNumber = Math.floor(Math.random() * 16777215); 
  // Convert the number to a hexadecimal string
  let hexColor = randomNumber.toString(16);
  // Pad the string with leading zeros if its length is less than 6
  hexColor = hexColor.padStart(6, '0'); 
  return `#${hexColor.toUpperCase()}`;
}

// Example usage:
console.log(getRandomHexColor()); // Outputs a random hex color like #A3B4C5

function getRandomHexBackColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  let randomNumber = Math.floor(Math.random() * 16777215); 
  // Convert the number to a hexadecimal string
  let hexColor = randomNumber.toString(16);
  // Pad the string with leading zeros if its length is less than 6
  hexColor = hexColor.padStart(6, '0'); 
  return `#${hexColor.toUpperCase()}`;
}
 
//First Box
document.body.firstElementChild.childNodes[1].style.color = getRandomHexColor();

//Second Box
document.body.firstElementChild.childNodes[1].nextElementSibling.style.color = getRandomHexColor();

//Third Box
document.getElementsByClassName("box")[2].style.color = getRandomHexColor();

//Fourth Box
document.getElementById("id4").style.color = getRandomHexColor();

//Fifth Box
document.body.firstElementChild.lastElementChild.style.color=getRandomHexColor();

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = getRandomHexBackColor();
})