var contigiousArray = function (nums){
	let maxLen = 0;

	for(let start=0; start<nums.length; start++){
		for(let end=start; end<nums.length; end++){
			let zero =0 , one =0;
			for(let k=start; k<=end; k++){
				if(nums[k] === 0){
					zero++
				}else{
	one++
				}
				}
				 if(zero === one){
					maxLen = Math.max(maxLen, end - start + 1)
				}
			}

		
	}
	return maxLen
}


const readline = require('readline');

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

rl.question("Enter numbers seperated by space:",(input) => {
	const nums = input.split(" ").map(Number);
	// const result = countValidSelections(nums);
	console.log("Output are:" ,contigiousArray(nums));
	rl.close();
})
