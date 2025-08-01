/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0 ;
    let maxSum = -Infinity;
    for(let i = 0; i<nums.length; i++){
        currSum = currSum +  nums[i];
        maxSum = Math.max( maxSum, currSum)
     if(currSum < 0){
        currSum = 0
    }
}   
    return maxSum
};
// @lc code=end

