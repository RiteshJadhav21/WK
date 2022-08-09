const Student = function (sname, sage) {
  this.sname = sname;
  this.age = sage;

  //   we can add method to new constructor as shown below but not recommended
  // this.calcYOB = function () {
  //   return 2022 - this.age;
  // };
};

const st5 = new Student("Haasini", 15);
const st6 = new Student("Sahiti", 15);
// console.log(st5.calcYOB());
// console.log(Student);

// console.log(Student.prototype);
// st6 . . . . . . . . st1000
// console.log(Student.prototype === st5.__proto__);

// methods and new properties can be added to the prototype instead
Student.prototype.calcYOB = function () {
  return 2022 - this.age;
};

console.log(st5.calcYOB());
console.log(st6.calcYOB());

// prototype of the construction function itself can be accessed using the property 'prototype'
// console.log(st5);
// console.log(Student.prototype);

// const stg_YOB = st5.calcYOB();
// console.log(stg_YOB);
// created object's prototype can be accessed using the __proto__ property
// console.log(st5);
// console.log(st5.__proto__ === Student.prototype);

// objects created as shown above are called as instances
// the properties associated with them are called instance properties
// we can use instanceof operator to check whether an object is an instance of a constructor function or not

// console.log(st5 instanceof Student);

// // console.log(st5.calcYOB());

// // as shown earlier we can add additional properties to the prototype
// // common properties to be shared by all objects can be defined on the prototype
// Student.prototype.school = "TIME";
// const st6 = new Student("Sahithi", 15);

// console.log(st5, st6);
// prototypal inheritance
// console.log(st5.school);
// console.log(st6.school);

// console.log(st6.hasOwnProperty("sname"));
// console.log(st6.hasOwnProperty("school"));

// pritotypal inheritance
// console.log(st6.__proto__.__proto__);

// // // check prototype of built in objects like arrays
// // const numArray = [2, 5, 8, 4]; // same as creating array using new Array() constructor method
// // console.log(numArray.__proto__);
