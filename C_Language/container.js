var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let maxArea = 0;
    while (i<j){
        let minHeight = Math.min(height[i],height[j]);
        let weidth = (j-i);
        let area = (weidth * minHeight)
        maxArea = Math.max(maxArea,area)
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
        
    }
    return maxArea;
};

let  height = [1,8,6,2,5,4,8,3,7];
let waterLevel = maxArea(height);
console.log(waterLevel)