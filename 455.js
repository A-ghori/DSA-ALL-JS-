/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0;  //Child Greed Index ...
    let j = 0; //Cookie Index..
    while (i < g.length && j<s.length){
        if(s[j]>=g[i]){
         i++;
         j++;   
        }else{
            j++;
        }
    }
    return i;
};

let g = [1,2,3];
let s = [1,1];
let result = findContentChildren (g,s);
console.log(result)
