var bs = function (arr,tar,start,end){
    if(start <= end){
let mid = start + Math.floor((end - start) /2);
if(tar > arr[mid]){
    return bs (arr ,tar, mid +1, end)
}
else if (tar < arr[mid]){
    return bs (arr,tar, start ,mid -1 )
}else{
    return mid;
}
    }
    return -1;
}


const arr = [0,1, 3, 5, 7, 9];
const tar = 1;

console.log("Target index:", bs(arr, tar, 0, arr.length - 1));