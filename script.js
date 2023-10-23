// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}
person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name},I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	//call that person constructor to intialiaze name and age
	person.call{this,name,age};
	this.jobTitle=jobTitle;
}

Employee.prototype =object.create{person.prototype};
Employee.prototype.constructor=Employee;

Employee.prototype.jobGreet =function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
} 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
