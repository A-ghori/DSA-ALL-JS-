/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
let count = [];
    for (let i =0; i < n; i++){
      count.push(nums[i]);
      count.push(nums[i+n]);
        }
        return count; 
    }

// @lc code=end

