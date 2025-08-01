var n = 5;
var array = [1,2,3,4,5]
var maxSum = -Infinity

for(let start = 0 ; start < n ; start++){
let subarray = 0
    for (let end = start ; end < n ; end++){
 subarray = subarray + array[end]
 maxSum = Math.max(subarray, maxSum)
    }
}
console.log(`MaxSum is : ${maxSum}`)