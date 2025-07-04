// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let array = [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 7]
let result = []

array.sort();

function duplicate(array, result) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i - 1]){
            result.push(array[i], array[i]);
    }
}
}

duplicate(array, result)
console.log(result)
