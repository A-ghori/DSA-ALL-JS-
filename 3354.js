// Input: nums = [1,0,2,0,3]
// Output: 2
// The only possible valid selections are the following:

// Choose curr = 3, and a movement direction to the left.
// [1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,0].
// Choose curr = 3, and a movement direction to the right.
// [1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].


var makeZero = function (nums){
	let n = nums.length;

// For foing left sum from choosing one 0 and and right sum;;

	let total = nums.reduce((acc,sum) => acc + sum, 0);
	let suffix = 0;
let ans = 0;
	for(let i=0; i<n; i++){
      let temp = total - suffix;
      if(nums[i] === 0){
      	if(temp === suffix){
  ans += 2;
      	}else if(Math.abs(temp - suffix) === 1){
ans += 1;
      	}
      }
suffix += nums[i]

	}
	return ans 
}



const readline = require('readline');

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

rl.question("Enter numbers seperated by space:",(input) => {
	const nums = input.split(" ").map(Number);
	// const result = countValidSelections(nums);
	console.log("Output are:" ,makeZero(nums));
	rl.close();
})


