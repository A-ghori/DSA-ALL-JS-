var countValidSelections = function(nums) {
    let n = nums.length;
    let total = nums.reduce((sum, num) => sum + num, 0);
    let suffix = 0;
    let ans = 0;
    for (let i = 0; i < n; i++){
        let temp = total - suffix;
        if (nums[i] === 0){
            if (temp === suffix){
                ans += 2;
            } else if (Math.abs(temp - suffix) === 1){
                ans += 1;
            }
        }
        suffix += nums[i];
    }
    return ans;
};


// ✅ Input lena (Node.js style)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by space: ", (input) => {
    const nums = input.split(" ").map(Number);
    const result = countValidSelections(nums);
    console.log("✅ Output:", result);
    rl.close();
});