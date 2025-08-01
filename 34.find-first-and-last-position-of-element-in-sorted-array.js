/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
//Searching First Half 
function findFirst (nums, target){
    let start = 0 ; let end = nums.length - 1; let first = -1;
    while(start <= end){
let mid = start + Math.floor((end - start)/2)
if(nums[mid] === target) {
    first = mid;
    end = mid - 1; //Search on left side 

}else if(target > nums[mid]){
start = mid + 1;
}else
    {
        end = mid - 1;

}

}
return first;


}
function findSecond (nums,target){
let start = 0; let end = nums.length - 1; let second = -1;
while(start <= end){
    mid = start + Math.floor((end - start)/2)
    if(nums[mid] === target){
         second = mid;
        start = mid + 1 // Search on right side
}else if (target < nums[mid]){
    end = mid - 1;
}else{
    start = mid + 1;
}
    
    
}return second;
}

return [findFirst(nums, target), findSecond(nums, target)];

//     let start = 0;
//     let end = nums.legth - 1;
//    while(start <= end){
//    let mid = start + Math.floor((end - start)/2)
//    if(target < nums[mid]){
//     end = mid - 1
//    }else if(target > nums[mid]){
//     start = mid + 1
//    }
//    else{
//     return mid
//    }
//    }
//    return -1 ;
};
// @lc code=end

