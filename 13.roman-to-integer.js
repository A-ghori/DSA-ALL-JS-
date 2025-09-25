/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    // let map = new Map();
    let sym = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
      
    for(let i=0; i<s.length; i++){
        let current = sym[s[i]];
        let next = sym[s[i+1]];
        // map.set(result(s[i]))
        if(current<next){
            result = result - current;
        }else{
            result = result + current
        }
    }
    return result 
};
// @lc code=end
1