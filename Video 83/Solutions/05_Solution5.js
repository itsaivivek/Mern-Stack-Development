// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let numbersArray = [1, 2, 3, 4, -5, 6, 7]

let sum = (numbersArray) => {
    let sum1 = 0;
  for (const element of numbersArray) {
    if(element<0){
        break;
    }
    else{
        sum1 += element;
    }
  }
  return sum1;
}

console.log(sum(numbersArray));