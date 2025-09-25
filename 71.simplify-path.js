/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
     path = path.split('/');
    let stack = [];

    for(let i=0; i<path.length; i++){
        if(path[i]===("..") && path[i]!==0){
            stack.pop()
        }else if(path[i]!==("") && path[i]!==("..") && path[i]!==(".")){
            stack.push(path[i])
        }
        
    }
    const normalize = "/" + stack.join("/")
        return normalize

};
// @lc code=end

