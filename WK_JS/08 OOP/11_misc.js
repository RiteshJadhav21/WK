// const Person = function (sname, sage) {
//   this.sname = sname;
//   this.sage = sage;
// };

// Person.species = "Human Being";

// Person.greet = function () {
//   console.log("Hello");
// };

// p1 = new Person("Nagaraj", 45);

// console.log(Person.species);
// Person.greet();

// console.log(p1.species);
// // p1.greet();

// class Person {
//   static species = "Human";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello from Person");
//   }
// }

// p1 = new Person("Nag", 45);
// console.log(p1.species);
// console.log(Person.species);

// Person.greet1();
// p1.greet();
// p1.greet1();

// class Student extends Person {
//   constructor(name, age, sclass) {
//     super(name, age);
//     this.sclass = sclass;
//   }
// }

// s1 = new Student("Sreekar", 13, 8);
// console.log(s1);

class Person1 {
  marks;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  updateMarks(m) {
    this.marks = m;
  }
}

p1 = new Person1("Sreekar", 13);
p1.updateMarks(50);
console.log(p1.marks);

p1.marks = 100;
console.log(p1);
