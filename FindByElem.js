// nums = [5, 10, 15, 20], find 15 → output: 2


var find = function(nums , target){


for(let i=0; i<nums.length; i++){
	if(nums[i] === target){
return i
	}

}

}

console.log(find([5, 10, 15, 20],20))


// 0 -> 0<4 -> 1 -> 5
// 1 -> 1<4 -> 2 -> 10
// 2 -> 2<4 -> 3 -> 15 
// 3 -> 3<4 -> 4 -> 20
// 4 -> 4<4 -> 5 (false)

// nums[i] = 2 

