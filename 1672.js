/**
 * @param {number[][]} accounts
 * @return {number}
 * 
 * 	•	Tere paas ek accounts naam ka 2D array hai — matlab matrix, like:
 * [[1, 2, 3],
 [3, 2, 1],
 [4, 5, 1]]
 	•	Yahaan:
	•	Har row → ek customer hai
	•	Har column → ek bank hai

⸻

💰 Kaam kya karna hai?

Har customer ke saare banks ka paisa jod — fir dekh kiske paas sabse zyada paisa hai.

🧮 Example:
Customer 0: 1 + 2 + 3 = 6  
Customer 1: 3 + 2 + 1 = 6  
Customer 2: 4 + 5 + 1 = 10  ✅

Answer = 10 → Richest customer  
 *
m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100


 */
var maximumWealth = function(accounts) {
    let wealthyCustomer = 0;
    for (let i=0; i<accounts.length ; i++){
        let maxWealth = 0;
        for(let j=0; j<accounts[i].length; j++){
            maxWealth += accounts[i][j];
        }
        if(maxWealth > wealthyCustomer){
            wealthyCustomer = maxWealth;
        }
    }
    return wealthyCustomer;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))