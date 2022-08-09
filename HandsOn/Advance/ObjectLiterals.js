// let name = "Ritesh",
// course = "Btech";

// var obj = {
// name : name,
// course : course
// };

// console.log(obj);
// console.log(obj.name);


// // With Object Literals
// let name = "Ritesh",
// course1 = "Btech";

// var obj = {
// name,
// course 
// };

// console.log(obj);
// console.log(obj.name1);


// // Variable as a property name
// let n = "name";

// var obj = {
// [n] : "Ritesh",
// course : "Btech", 
// detail(){
// return `${this.name} is student of ${this.course}`;
// }
// };


// // Computed property name  
// let name2 = 'student';

// var obj = {
// [name2 + "name"] : "Ritesh",
// course : "Btech", 
// detail(){
// return `${this.studentname} is student of ${this.course}`;
// }
// };
// JavaScript

// // Declare function in object before Object Literals 
// var obj = {
//  name,
//  course, 
//  detail : function(){
//     return `${this.name} is student of ${this.course}`;
//  }
// };

// console.log(obj.detail());
// JavaScript

// // Declare function in object with Object Literals 
// var obj = {
//  name,
//  course, 
//  detail(){
//    return `${this.name} is student of ${this.course}`;
//  }
// };

// console.log(obj.detail());

// // New Way to view object's property value
// console.log(obj['name']);
// console.log(obj['detail']());
// JavaScript

// // Return Function value as a Object Literal 
// function student(fname, lname, course){
// let fullname = fname + " " + lname;

// return {fullname, course};
// }

// console.log(student(fname, lname, course));
// JavaScript

// // Let take variable as Object 
function student(fname, lname, course){
let fullname = fname + " " + lname;

return {fullname, course};
}

let s = student("ritesh","Jadhav", "Bcom");

console.log(s.fullname);
console.log(s.course);