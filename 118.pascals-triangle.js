/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for(let i=0; i<numRows.length; i++){
        let rows = new Array(i + 1);
        rows[0] = 1;
        rows[i] = 1;
        // For accessing middle elements 
        for(let j=0; j<i; j++ ){
            rows[j] = result[i - 1][j - 1] + result[i - 1][j] 
        }
        result.push(rows)
    }
    return result 
};
// @lc code=end

