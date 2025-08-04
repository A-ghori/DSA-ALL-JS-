/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    // For n natural number formula 
    let c = n*((n + 1)/2);
    let actualSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    return c - actualSum
};
// @lc code=end

