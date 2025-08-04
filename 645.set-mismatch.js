/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;

    let expectedSum = n * (n + 1) / 2;
    let expectedSqSum = n * (n + 1) * (2 * n + 1) / 6;

    let actualSum = 0;
    let actualSqSum = 0;

    for (let num of nums) {
        actualSum += num;
        actualSqSum += num * num;
    }

    let diff = actualSum - expectedSum; // x - y
    let sqDiff = actualSqSum - expectedSqSum; // x^2 - y^2

    // x^2 - y^2 = (x - y)(x + y) => sqDiff = diff * (x + y)
    let sumXY = sqDiff / diff; // x + y

    let x = (diff + sumXY) / 2; // duplicate
    let y = x - diff; // missing

    return [x, y];
}
// @lc code=end

