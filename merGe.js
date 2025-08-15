//Return default value for base case 
const mergeSort=(arr) => {
if(arr.length <= 1){
    return arr;
}
//Mid. 
const mid = Math.floor(arr.length / 2);

//Split into left and right 
const left = arr.slice(0,mid)
const right = arr.slice(mid)

//Recurseively
return merge(mergeSort(left) , mergeSort(right))
};

function merge (left,right) {
    let sortedArray = []
    let i = 0; j =0 
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            sortedArray.push(left[i]);
            i++
        }
        else{
            sortedArray.push(right[j])
            j++
        }
    }
    return sortedArray
    .concat(left.slice(i))
    .concat(right.slice(j))
}

// Example:
let arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr)); // Output: [2, 3, 4, 5, 8]
