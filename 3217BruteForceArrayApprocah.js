function modifiedList(nums,head){
	let arr = []
	for(let i=0; i<head.length; i++){
		let found = false;
		for(let j=0; j<nums.length; j++){
			if(head[i] === nums[j]){
				found = true
				break
			}
		}if(!found){
			arr.push(head[i])
		}
	}
	return arr
}
console.log(modifiedList([1], [2,4,5,3]))