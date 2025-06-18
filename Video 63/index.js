let arr = [1, 2, 4, 5, 7]
// Index  0, 1, 2, 3, 4
arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString());
console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr);
// console.log(arr.push(6));
console.log(arr.push("Harry"));
console.log(arr);
console.log(arr.shift());
// console.log(arr.unshift(6));
console.log(arr.unshift("Jack"));
console.log(arr);
delete arr[4];
console.log(arr);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
console.log(a1, a2, a3);
console.log(a1.concat(a2, a3));

let b = [3, 2, 6, 4];
console.log(b);
console.log(b.sort());
console.log(b.splice(1,2));
console.log(b);
let c = [1, 2 ,3 ,4 ,5, 6];
console.log(c);
console.log(c.splice(1,3));
console.log(c);
console.log(c.splice(1,2, 233, 333));
console.log(c);
const num = [1, 2, 3, 4];
console.log(num);
console.log(num.slice(2));
console.log(num);
console.log(num.slice(1,3));
console.log(c.reverse());
