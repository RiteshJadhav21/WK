// let age = 30;
// let prevAge = age;
// age = 40;

// console.log(age);
// console.log(prevAge);

const student1 = {
  firstName: "Sreekar",
  age: 13,
};

const student2 = student1;
student2.age = 14;
student2.firstName = "Abhinav";

console.log(student1);
console.log(student2);

const student3 = {
  firstName: "Sreekar",
  age: 13,
};

const student4 = Object.assign({}, student3);
student4.age = 14;
student4.firstName = "Abhinav";

console.log(student3);
console.log(student4);
