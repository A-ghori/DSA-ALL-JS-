var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=> a-b);
    let closet = Infinity;

    for(let i=0; i<nums.length - 1; i++){
        // Skippinh i duplicates

        if(i>0 && nums[i] === nums[i-1]) continue;

        //assign two pointers
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){
            let total = nums[i] + nums[left] + nums[right]

if(Math.abs(total - target) < Math.abs(closet - target)) {
    closet = total;
}
// Adjust two pointer
if(total === target){
    return total;
} else if(total < target) {
    left++;
} else {
    right--;
}
        }
    }
    return closet;
}
