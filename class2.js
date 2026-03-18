class Robot {
constructor(name,model,year,work){
this.name = name;
this.model = model;
this.work = work;
this.year = year;
console.log("Robot is Now Ready from the COnstructor");
}
modelNo() {
console.log(`${this.year} and ${this.work} ${this.model}`);
}
}

class ElectricRobot extends Robot {
constructor(name, model, year, work, battery, version, controller){
super(name,model,year,work)
this.batteryLife = battery;
this.version = version;
this.controller = controller;
}
d(){
console.log(`Battery Life: ${this.batteryLife} hours `);
}
}

let tesla = new ElectricRobot("Tesla", "T1" , 2022, "Humanoid", "48", "2.0", "Audrino");
tesla.d();
tesla.modelNo()
