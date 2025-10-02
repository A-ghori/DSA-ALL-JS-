/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let n = position.length;
    let car= [];
let res = 0;

    for(let i=0; i<n; i++){
car.push([position[i], (target - position[i]) / speed[i]])
    }

    car = car.sort((a,b) => b[0] - a[0]) //For descending order sort 
let prev = 0; // for previos fleet time 

for(let [pos,time] of car){
    while(time > prev){
        res++; // new fleet formed
        prev = time //Update last fleet time
    }
    //else join no fleet without increment 
}
return res

}