/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0 ; i<nums.length ; i++){
    let x = nums[i];

    if(x !== val){
nums[k] = x;
k++;
}

    }
    return k;
};
// @lc code=end

