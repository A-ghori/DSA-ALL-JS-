/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let answer = new Array(temp.length).fill(0);
    let stack = [];

    for(let i=0; i<temp.length; i++){
        while(stack.length !==0 && temp[i] > temp[stack[stack.length - 1]] ){
        let prevIndex = stack.pop()
        answer[prevIndex] = i - prevIndex
    }
        stack.push(i)
    }
    return answer 

};
// @lc code=end

