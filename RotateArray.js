//const [first, ...remaining] = [1, 2, 3, 4];
//console.log(first);    // 1
//console.log(remaining); // [2, 3, 4]


let arr = [1,2,3,4,5];
let d = 2;
let n = arr.length;
let normalised = ((d%n)+n)%n;
arr.push(...arr.splice(0,normalised));
console.log("Array is", arr);
