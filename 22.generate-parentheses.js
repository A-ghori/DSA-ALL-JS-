/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function backtrack(open,close,string){
if(string.length === 2*n){
    res.push(string)
    return 
}

        if(open < n){
    backtrack(open + 1, close, string + "(")
}
if(close < open){
    backtrack(open, close + 1, string + ")")
}
}
backtrack(0,0,"")
return res
};
// @lc code=end

