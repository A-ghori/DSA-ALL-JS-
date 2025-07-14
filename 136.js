/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * 
 * 
 * HERE I APPLY THE XOR AND BIT MANIPULATION
 * ARRAY
 * 
 * 
 * 
 * 
 */
var singleNumber = function(nums) {
  let k = 0; // Starting with let k = 0; is correct (XOR identity)
    for (let i = 0; i<nums.length; i++){
   k ^= nums[i];  // Xor Formula that is X = X^ nums[i]
        
    }
    return k;
};

// sample inputs
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];

console.log(singleNumber(nums1)); // should print 1
console.log(singleNumber(nums2)); // should print 4