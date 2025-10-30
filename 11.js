// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 // In this case, the max area of water (blue section) the container can contain is 49.



var container = function(height){
// Greedy 
	let left = 0;
	let right = height.length - 1
    let maxArea = 0;
	while(left < right){ // 0 < 8 true
		// height[left] = 1 -> index 0
		// height[right] = 7 -> index 8
		//width = 8 - 0 = 8
		// Math.min(height[left] = 1 and height[right] = 7) -> 1  is min 
		// and then area = 8 * 1 = 8
		// height[left] < height[right] -> 1 < 7 true then left ++ now point the lft pointer to 3 
let width = right - left; // 8 - 0 = 8
let minHeight = Math.min(height[left] , height[right]);    // let say height[left] = 1 height[right] = 7 which is min 1 
let area = width * minHeight;
maxArea = Math.max(maxArea, area)
if(height[left] < height[right]){
	left ++
}else{
	right --
}


	}
	return maxArea;
}

console.log(container([1,8,6,2,5,4,8,3,7]))