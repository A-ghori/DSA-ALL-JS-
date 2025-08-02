/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let c = Number(x)
    let sq = Math.floor(c ** (1/2))
    return sq
};
// @lc code=end

