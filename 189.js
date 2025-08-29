/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */



// For Right Elements
function rotateRight (nums, k) {
    k = k % nums.length;

    function reverse(start,end){
        while(start < end){
            // Swapping 
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start ++;
            end --;
        }
    
    }
    // Rotation
    reverse(0, nums.length - 1);
    reverse(0 , k - 1);
    reverse(k, nums.length - 1);
}