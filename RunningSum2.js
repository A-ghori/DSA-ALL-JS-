//Example: [2,3,1,4] → [2, 5, 6, 16]
// First element even or odd no matter 


var RunningSum = function(elem){
    let prev = 0;

    let arr = [];
    for(let i=0; i<elem.length; i++){
        let sum
if( i === elem.length - 1 && prev %2 === 0 ){
    //console.log(`num is even ${prev}`)
    sum = prev * 2 + elem[i]
} else {
    sum = prev + elem[i]
}
arr.push(sum);
prev = sum;

}
console.log(arr)
}

RunningSum([2,3,1,6]);