/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
let start = 0;
let end = nums.length - 1;
while(start <= end){
    let mid = start + Math.floor((end - start ) / 2);
    if(nums[mid] === target) return mid;
    
    
    // This lines are causing for time limit exceed 
    // let Right = [mid + 1 , end];
    // let Left = [start , mid - 1];


//Check if left half is sorted ?
if(nums[start] <= nums[mid]){
    if(nums[start] <= target && target < nums[mid]){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
}
// Check if right half is sorted or not ?
else {
   if(nums[mid] <= target && target <= nums[end]){
    start = mid + 1
   }else{
    end = mid - 1
   }
}
}
return -1;
};
// @lc code=end

