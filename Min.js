// nums = [1,2,0,3,5,6]

//Now i have to find 6 ;



var findOne = function (nums){
	
let min = nums[0];
for(let i=0; i<nums.length; i++){
	if(nums[i] < min){
		min = nums[i]
}
}
return min;

}
console.log("Min number is:", findOne([1, 2, 3,0, 5, 6]));