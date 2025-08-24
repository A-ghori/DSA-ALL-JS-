/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for right
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } 
            else if (total < 0) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return result;
}
// @lc code=end

