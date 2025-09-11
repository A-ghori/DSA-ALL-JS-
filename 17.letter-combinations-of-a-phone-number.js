/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return []
    }
    const allDigits = [
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];

    let result = [' '];
    for(let i=0; i<digits.length; i++){
        let letters = allDigits(Number(digits[i]) - 2) 
        let Combinations = [];

        for(let j=0; j<result; j++){
            for(let k=0; k<letters; k++){
                Combinations.push(result[j] + letters[k]);
            }
        }
        result = Combinations
    }
    return result
};
// @lc code=end

