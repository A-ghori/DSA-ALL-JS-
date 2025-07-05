var twoSum = (nums,target) => {
    const map = new Map() ;
    for(let i=0 ; i< nums.length ; i++ ){
        const complement = target - nums[i];

        if(map.has (complement)){
            return [map.get(complement),i];  // for [ ] bracket because i have to return 2 indices as a pair return [0, 1]; // means nums[0] + nums[1] = target


        }
        map.set(nums[i],i);
    }
}
const nums = [2,7,11,15];
const target = 9;

const result = twoSum(nums,target);
console.log(result)