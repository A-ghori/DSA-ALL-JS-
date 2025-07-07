var buyChoco = (prices,money) =>{
    let minSum = Infinity;
    for(let i=0; i<prices.length-1; i++){
         console.log("Index:", i, "→ Value:", prices[i]);
        for (let j = i+1; j<prices.length; j++){
            console.log("Index:", j , "-> Value: ",prices[i])
            let sum = prices[i] + prices [j];
            if(sum <= money && sum < minSum){
                minSum = sum;
            };

        };
    };
if(minSum == Infinity){
    return money;

} else{
    return money - minSum;
}

}

let prices = [3,2,3]
let money = 3
let product = buyChoco(prices,money)
console.log(product);