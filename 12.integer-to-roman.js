/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = "";
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];


for(let i=0; i<values.length; i++){
while(num >= values[i]){
result = result + symbols[i]
num = num - values[i]
}

}
return result
};
// @lc code=end

