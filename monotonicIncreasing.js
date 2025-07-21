const nextSmaller = function (nums) {
    const stack = [];
let result = new Array(nums.length).fill(-1);
for (let i=0; i<nums.length; i++){
    while(stack.length && nums[i] < nums[stack[stack.length - 1]]){
        const index = stack.pop();
        result[index] = nums[i];
    }
    stack.push(i);
}
return result;
}
console.log(nextSmaller([4, 5, 2, 10, 8]));
