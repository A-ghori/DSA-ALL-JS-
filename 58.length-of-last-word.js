/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.trim();
let m = s.split(" ");
let last = m[m.length - 1];
return last.length

};
// @lc code=end

