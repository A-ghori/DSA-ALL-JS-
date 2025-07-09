/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0;  //Child Greed Index ...
    let j = 0; //Cookie Index..

g.sort((a, b) => a - b);
s.sort((a, b) => a - b);
// ❓ Where are a and b declared?
// ✅ They are function parameters of the arrow function used in .sort() — so they’re not declared manually by you.

// This is just a callback function passed into .sort():

// js
// Copy
// Edit
// (array).sort((a, b) => a - b)
// JavaScript automatically passes two elements at a time from the array into a and b to decide their order.

// 🔍 What does (a, b) => a - b mean?
// If the result is negative → a comes before b

// If the result is zero → order unchanged

// If the result is positive → a comes after b

// 🔧 Example:
// js
// Copy
// Edit
// let arr = [3, 1, 2];
// arr.sort((a, b) => a - b);  // Sorts to [1, 2, 3]
// JavaScript behind the scenes does:

// Compare 3 and 1 → returns 2 → swap

// Compare 3 and 2 → returns 1 → swap

// ...

// No need to declare a or b yourself — .sort() handles that.



    while (i < g.length && j<s.length){
        if(s[j]>=g[i]){
         i++;
         j++;   
        }else{
            j++;
        }
    }
    return i;
};

let g = [1,2,3];
let s = [1,1];
let result = findContentChildren (g,s);
console.log(result)
