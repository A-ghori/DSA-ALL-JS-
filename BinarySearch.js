var binarySearch =  function (arr,target){
    let start = 0;
    let end = arr.length - 1 ;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(target > arr[mid]){
            start = mid + 1;
        }
        else if(target < arr[mid]){
            end = mid - 1;
        } 
        else{
              return mid
        }
    

    }
    return -1;
}

const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

console.log("Target index:", binarySearch(arr, target));