/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s =s.trim();
    let sign = 1
    let map = new Map();
    map.set("+", 1);
    map.set("-", -1)


    if(s.length === 0){
        return 0
        
    }
    if(map.has(s[0])){
       sign = map.get(s[0]);
       s = s.slice(1)
    }

    let result = 0;
    let curr = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]<'0' || s[i]>'9'){
            break
        }

        let convert = s[i] - 0

        curr = result * 10 + convert
    }
    return curr * sign 
};
// @lc code=end

