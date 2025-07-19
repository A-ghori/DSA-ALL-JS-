let rows = 3 
let cols = 4

let arr = new Array(rows).fill().map(() => new Array(cols).fill(0));
arr[1][2] = 7;
console.log(arr);