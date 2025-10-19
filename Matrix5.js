mat = [
    [1,2,3],
    [4,0,6],
    [7,8,9]
]
 

// Set Matrix 0


let m = mat.length;
let n = mat[0].length;


for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(mat[i][0] === 0 || mat[0][j] === 0){
            mat[i][j] = 0
        }
    }
    console.log("Matrix are:",mat[i])
}