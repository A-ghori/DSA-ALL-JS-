

var numJewelsInStones = function(jewels, stones) {
  let count = 0;
    // Step 1: Convert jewels string into a Set for O(1) lookup
   const set = new Set(jewels);
    for (let i = 0; i <=stones.length-1 ; i++ ){
    let char = stones[i];
    if(set.has(char)){
   count ++;
    }

  }
  return count;
};

let jewels = "aA";
let stones = "aAAbbbb";
let result = numJewelsInStones (jewels, stones)
console.log(result)