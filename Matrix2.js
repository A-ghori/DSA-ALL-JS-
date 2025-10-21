matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let m=matrix.length;
let n=matrix[0].length;
let MiddleCol = Math.floor(n/2);
//let transpose = []
for(let i=0; i<m; i++){
    //transpose[i]=[]
    console.log("Diagonal Elements are",matrix[i][i])
//console.log("Middle Element:",matrix[i][MiddleCol])

for(let j=0; j<n; j++){
  //  if(matrix[i][MiddleCol] === matrix[j][n-1-i]){  
//transpose = transpose.filter(el => el !== matrix[j][MiddleCol])
    //}
    console.log("Secondary Diagonal Elements are ->", matrix[j][n-1-j])
}
}
//console.log(transpose)