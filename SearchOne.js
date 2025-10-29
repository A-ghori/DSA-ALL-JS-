// nums = [1,2,0,3,5,6]

//Now i have to find 6 ;


var find = function(nums,target){
	let count = 0;
	for(let i=0; i<nums.length; i++){
if(nums[i] === target){
count = nums[i]
	}
}
return count 
}


console.log(find([1, 2, 3, 5, 6], 6));