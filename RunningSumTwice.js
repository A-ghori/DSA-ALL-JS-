//[2, 3, 1, 4]
//[2, 5, 6, 10]

var RunningSum = function(elem){
    let prev = 0;
    let curr = 0;
    let arr = []
    for(let i=0; i<elem.length; i++){
        let sum = prev + elem[i];
        //console.log(`prev is ${prev}`)
        console.log(`Curr is : ${curr} and Sum is ${sum}`)
        curr = sum;
        
arr.push(curr)
        prev = sum;
console.log(`prev: ${prev}`)
    }
    console.log(arr)
}

RunningSum([2,3,1,4]);

