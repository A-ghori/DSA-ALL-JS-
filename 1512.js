var numIdenticalPairs = function(nums) {
    // const set = new Map();
    let count = 0;
    for (let i = 0 ; i<nums.length ; i++ ){
        for(let j = i+1; j<nums.length ; j++){ //guarantees j > i.   // here j is ALWAYS at least i+1
            if(nums[i] === nums[j]){
                count ++;
            }
        }
    }
    return count ;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));