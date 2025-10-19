const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let m = matrix.length;
let n = matrix[0].length;
let middleCol = Math.floor(n / 2);
let transpose = []
for (let i = 0; i < m; i++) {
    let middleElem = matrix[i][middleCol];
console.log('MIDDLE COLUMNS ARE:',middleElem);
console.log('Primarry Diagonals are:',matrix[i][i]);

let secDia = matrix[i][n-1-i];
console.log("Secondary Diagonal is:",secDia);
if(middleElem === secDia){
    transpose = transpose.filter(el => el !== middleElem);
}else{
    transpose.push(middleElem)
}

}
console.log("Transpose Elems are:", transpose)