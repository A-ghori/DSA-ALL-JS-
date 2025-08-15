const mergesort = (arr) => {
  // function body here
  if(arr.length <= 1){
    return arr; //base case
  }

  //Mid Index
  const mid = Math.floor(arr.length / 2);

  //Split into left and right 
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)

  //Recuresively Sort 
  return merge(mergesort(left), mergesort(right));
};

const merge = (left,right) => {
let sortedArray = []
let i = 0; j = 0;
//Compare elements and push smaller one
while (i<left.length && j<right.length){
    if(left[i] < right[j]){
        sortedArray.push(left[i]);
        i++
    } else {
        sortedArray.push(right[j])
        j++
    }
}
return sortedArray
.concat(left.slice(i)) 
.concat(right.slice(j))
}