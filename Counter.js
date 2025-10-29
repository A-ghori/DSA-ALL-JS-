// nums = [1, 2, 2, 3, 2, 4], target = 2 → output: 3



var counter = function(nums,target){
	let count = 0;
	for(let i=0; i<nums.length; i++){
      if(nums[i] === target){
      	count ++
      }
	}
	return count 
}

console.log(counter([1, 2, 2, 3, 2, 4], 2));