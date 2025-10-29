// nums = [1, 4, 9, 2, 7] → output: 9


var max = function(nums){
	let max = nums[0];

	for(let i=0; i<nums.length; i++){
if(nums[i] > max){
	max = nums[i]
	}
}
return max
}

console.log(max([1, 4, 9, 2, 7]))