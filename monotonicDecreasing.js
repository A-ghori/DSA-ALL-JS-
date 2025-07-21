const nextGreater = (nums) => {
    let stack = [];
    let result = new Array(nums.length).fill(-1);
    for(let i = 0; i<nums.length; i++){
        while(stack.length && nums[i] > nums[stack[stack.length -1]]){
            let Index = stack.pop();
            result[Index] = nums[i];
        }
    stack.push(i);
    }
    return result;
}

console.log(nextGreater([2, 1, 2, 4, 3]));