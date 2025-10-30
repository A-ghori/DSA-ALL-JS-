
// [1,8,6,2,5,4,8,3,7]
 // i,j   i = 1 and j =8 


// This is Brute Force Approach 

var container = function(height){
	let maxArea = 0;
	for(let i=0; i<height.length; i++){
       for(let j=i+1; j<height.length; j++){
       	let width = j - i; // 8 - 1 = 7
       	let shorterHeight = Math.min(height[i],height[j]);
       	let area = width * shorterHeight;
       	maxArea = Math.max(maxArea, area); // 8 is the max
     
       }

	}
	return maxArea
}


console.log(container([1,8,6,2,5,4,8,3,7]));