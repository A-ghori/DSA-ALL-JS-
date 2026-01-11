//const [first, ...remaining] = [1, 2, 3, 4];
//console.log(first);    // 1
//console.log(remaining); // [2, 3, 4]


let arr = [1,2,3,4,5];
let d = 2;
let n = arr.length;
//let normalised = ((d%n)+n)%n;
//arr.push(...arr.splice(0,normalised));
//console.log("Array is", arr);

let arr1 = [];
// First d to end array element revese;
for(let i=arr.length - 1; i>=d; i--){
arr1.push(arr[i]);
}
// Next d to 0 reverse;
for(let i = d - 1;  i >= 0; i--){
arr1.push(arr[i])
}

console.log(arr1)
