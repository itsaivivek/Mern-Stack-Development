//  Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

let numbers = [2, 3, 5, 6, 8, 7]

async function multipliedByTwo(numbers) {
    // map() = creates a new array by performing some operation on each element of array  
    let promiseArray = numbers.map((x) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(x * 2);
            }, 500);
        })
    }
    )
    return await Promise.all(promiseArray)
}

async function main() {
    console.log(await multipliedByTwo(numbers))
}
main()



// It does not ask to resolve one-by-one sequentially (like first 500ms, then next 500ms, etc)

// It does not say to delay the entire array for 500ms and then multiply all at once

// It only asks to make each number resolve after 500ms delay individually.


// Alternative Method - Uncomment this code and comment above code to see result

// function multipliedByTwo(numbers) {
//     return numbers.map((x) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(x * 2);
//             }, 500);
//         });
//     });
// }

// let promises = multipliedByTwo([2, 3, 5, 6, 8, 7]);

// console.log(promises);  // Array of Promises

// // If you want to get their results:
// Promise.all(promises).then(results => {
//     console.log(results);
// });
