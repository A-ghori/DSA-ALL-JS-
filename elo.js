const Probability = (rating1,rating2)=>{
    return 1/(1+Math.pow(10,(rating1-rating2) /400));
}


const eloRating = (Ra,Rb,Outcome)=>{
let Pa = Probability(Ra,Rb); // Prob of winning Player A
let Pb = Probability(Rb,Ra); // Prob of winning Player B

Ra = Ra + k*(Outcome-Pa);
Rb= Ra+ k*((1-Outcome)-Pb);

console.log("Updated Rating : ");
console.log(`Ra= ${Ra} and Rb=${Rb}`);
}


let Ra= 1000;
let Rb= 900;
Outcome = 1;
k = 30;
eloRating(Ra,Rb,Outcome)
