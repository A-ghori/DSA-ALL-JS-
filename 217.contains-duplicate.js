/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicate = new Set ();
    for(let i=0; i<nums.length; i++){
        if(duplicate.has(nums[i])){
            return true;
        }
       duplicate.add(nums[i]);
    }
 return false;
};
// @lc code=end

