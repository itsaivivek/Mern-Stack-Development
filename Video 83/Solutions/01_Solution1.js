// The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names. 

let studentArray= ["Harry", "Ramesh", "Vivek", "Jagadeesh", "Ravindranathan", "Santoshprasad", "Ram"];

let houses = [];
let houseObj = {
    A : "Gryffindor",
    B : "Hufflepuff",
    C: "Ravenclaw",
    D: "Slytherin"
}
for (const student of studentArray) {
    if (student.length < 6) {
        houses.push(houseObj.A)
    }
    else if (student.length < 8 && student.length >= 6) {
        houses.push(houseObj.B)
    }
    else if (student.length < 12 && student.length >= 8) {
        houses.push(houseObj.C)
    }
    else{
        houses.push(houseObj.D)
    }
}
for (let i = 0; i < studentArray.length; i++) {
    const element = studentArray[i];
    console.log(element ,"-", houses[i])
    
}