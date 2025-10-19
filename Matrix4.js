matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


// 2D to 1D 
let m = matrix.length;
let n = matrix[0].length;
let arr = []
for(let i=0 ; i<m; i++){
for(let j=0 ; j<n ; j++){
    arr.push(matrix[i][j])
    }
}

// 1D to 2D

let reshape = []
let index = 0;

for(let i=0; i<m; i++){
let row = [];
for(let j=0; j<n; j++){
    row.push(arr[index])
index++
}
reshape.push(row)
}
console.log("2D to 1D ->", arr, "\n 1D to 2D -> ",reshape)