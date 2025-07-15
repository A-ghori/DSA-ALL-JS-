var smallerNumbersThanCurrent = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        console.log(`\n🔍 Checking nums[${i}] = ${nums[i]}`);

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
                console.log(`✅ nums[${i}] (${nums[i]}) > nums[${j}] (${nums[j]}) → count = ${count}`);
            } else {
                console.log(`❌ nums[${i}] (${nums[i]}) <= nums[${j}] (${nums[j]})`);
            }
        }

        result.push(count);
        console.log(`➡️ Total smaller numbers than nums[${i}] (${nums[i]}) = ${count}`);
    }

    console.log(`\n✅ Final Result:`, result);
    return result;
};

// Example call
smallerNumbersThanCurrent([8, 1, 2, 2, 3]);