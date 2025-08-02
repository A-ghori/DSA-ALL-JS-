/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
//     let c = Number(num)
//     let sq = Number(num)
//     let cb = (c**sq)
// return cb

let sqrt = Math.floor(Math.sqrt(num))
return sqrt * sqrt === num
};
// @lc code=end

