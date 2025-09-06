/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const columns = board[0].length;
// DFS CREATING FOR MATRIX
    const dfs = (r,c,wordIndex) => {
        //Base Cases and Boundary checks 
if( wordIndex=== word.length) return true
if(r<0 || c<0 || r>=rows || c>=columns || board[r][c] !== word[wordIndex])return false;

const orginalChar = board[r][c];
board[r][c] = "#" // checking words marked as # 

// Explore neighbours
const found = dfs(r+1, c, wordIndex +1) ||
              dfs(r-1,c, wordIndex +1) ||
              dfs(r, c+1, wordIndex + 1) ||
              dfs(r, c-1, wordIndex + 1)

    // If dont get that particular word after searching then return the orginal character
    board[r][c] = orginalChar
    return found;
    }
    //Iterate through all the possible values 

    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(dfs(i,j,0)){
                return true
            }
        }
    }
    return false;
};