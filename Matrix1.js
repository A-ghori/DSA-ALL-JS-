matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let m = matrix.length;
let n = matrix[0].length;

let transpose = [];

for (let i = 0; i < n; i++) {
    transpose[i] = [];
    for (let j = 0; j < m; j++) {
        transpose[i][j] = matrix[j][i];
        console.log(`transpose[${i}][${j}] = matrix[${j}][${i}] = ${matrix[j][i]}`);
    }
}

console.log("Final Transpose:");
console.log(transpose);