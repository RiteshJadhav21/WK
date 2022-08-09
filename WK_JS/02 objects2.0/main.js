const student1 = {
  name: "Sreekar",
  age: 13,
};

const student2 = student1;

student2.name = "Gautam";

console.log(student2);
console.log(student1);

const student3 = Object.assign({}, student1);
console.log(student3);
student3.name = "Sreekar";
console.log(student3);
console.log(student1);
