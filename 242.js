/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 
 * 
 * 
 * Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 
 */
var isAnagram = function(s, t) {
// let count=0;
// for (let i = 0; i<s.length ; i++){
//     for(let j=0 ; j<t.length; j++){

    if (s.length !== t.length){
return false ;
    }else{
             return s.split('').sort().join('') === t.split('').sort().join('');
    }
//  count ++   

    
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false