/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let left  = nums.length - 2;
    while ( left>=0 && nums[left] >= nums[left+1]){
        left -- ;
    }
    if(left>=0){
let right = nums.length -1;
while(nums[right] <= nums[left]){
    right -- ;
}
[nums[left],nums[right]] = [nums[right], nums[left]]
nums[left];
// right --;
    }
// Reverse the subarray 
    let start = left + 1 ;
    let end = nums.length - 1;
    while(start < end){
        [nums[start] , nums[end]] = [nums[end] , nums[start]]
        start ++;
        end --;
    }
    
    
};
// @lc code=end
