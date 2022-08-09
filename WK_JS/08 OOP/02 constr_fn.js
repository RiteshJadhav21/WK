// using object literals each object has to created separately
// we cannot reuse the object definition or common properties
// for this we can use constructor function notation
// function Student_New() {
// const Student_New = function () {
//   this.sName = "Sreekar";
//   this.sAge = 15;
//   console.log(this);
// };

// Student_New();

// let s1 = new Student_New();
// console.log(s1.sName);
// console.log(s1.__proto__);
// console.log(Student_New.prototype);

// console.log(s1.__proto__ === Student_New.prototype);

// console.log(Student_Old);

// const st1 = new Student_Old();
// const st2 = new Student_Old();

// console.log(st1);
// console.log(st2);

// creating objects using new keyword on the construction function does the following 4 things
// 1. Create a new empty object {}
// 2. Assign the this keyword to the newly created empty object
// 3. Assign the prototype to the new object
// 4. Return the newly created object

// as shown above constructor funciton with hard coded properties is not much of use
// so we can make use of the information to make our object creation more meaningful
// we can recreate our construction function to accept parameters which can be used to initialize the object parameters
// for this we can use the this keyword which now points to the object
function Student(sname, sage) {
  this.sname = sname;
  this.age = sage;
}

const st3 = new Student("Sreekar", 13);
const st4 = new Student("Gautam", 13);

// adding attribute directly to an object does not affect other objects or the constructor itself
// hence not much useful and not recommended
// st3.school = "TIME";
// console.log(st3);
// console.log(st4);
// const st5 = new Student("Haasini", "15");
// console.log(st5);
// console.log(st5.school);

// adding attributes directly to the construction results in unexpected behavior
// hence not recommended
// Student.favSport = "Football";
// console.log(st3.favSport);
// const st6 = new Student("Sahiti", 15);
// console.log(st6.favSport);
// console.log(st6);
// console.log(Student.favSport);

// Student.prototype.nationality = "Indian";
// console.log(st3.nationality);
// console.log(st4.nationality);
// const st6 = new Student("Sahiti", 15);
// console.log(st6.nationality);

// st3.__proto__.nationality = "Indian";

// console.log(st3.nationality);
// console.log(st4.nationality);
