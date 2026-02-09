//object literal
let person1 = {
 name:"tim" ,
 age : "42",
 sex : "M",
};
//use curly baces and semicolon to id obj
let person2 = {
     name : "cassie",
     age :"32",
     sex : "F",
};
//access attribute of obj
person1.name;
person2.sex;

console.log(person1.name);

let paragraph =document.createElement("p");
paragraph.innerHTML = person2.name;
document.body.appendChild(paragraph);


//====================
//Constructors
//====================
//obj constructor is a function used to create multiple with same structure but diff values

//ex
function Student(name, last, age){
     this.name = name;
     this.last = last;
     this.age = age;

}

//create
let student1 = new Student("Cassidy", "Jones", 32);

//quiz
console.log(student1.name);

