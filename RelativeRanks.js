// Score = [ 5,4,3,2,1] 5-> Gold 4-> silver 3-> bronze 2-> 4th place 1->5th place
//           0,1,2,3,4
// Iterate through the array for(let i=0; i<score.length; i++); 
// max = [] math.max = 5 then pop the max from the array and re max the array 
// 
// 
// 
// 
// 
// 
// 
// 
function RelativeRanks(score){
let map = new Map();
let firstPrize=map.set(1,"Gold Medal");
let secondPrize = map.set(2, "Silver Medal");
let thridPrize = map.set(3, "Brone Prize");
let forthPrize = map.set(4, "4th");
let fifthPrize = map.set(5, "5th");
let Max = 0;
let prize = [];
for(let i=0; i<score.length; i++){
Max = Math.max(...score);
if(map.get(score[i])!==Max){
    prize.push(score[i]);
    Max++;
}
}
}