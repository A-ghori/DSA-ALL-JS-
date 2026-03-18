//class Robot{
//constructor(naam, kaam){
//this.name = naam;
//this.job = kaam;
//console.log("Robot is ready");
//}
//}

//const myRobot = new Robot("Chitti", "Coding");

//console.log("ROBOT NAME IS ->",myRobot.name);
//console.log("ROBOT JOB IS ->",myRobot.job);

class Person{
constructor(name,age){
this.name = name;
this.age = age; 
}
g() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} old.`);
}
}
let p1 = new Person("Shubhayu", 21);
p1.g()	
