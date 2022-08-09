const student = {
  name: "Sreekar",
  school: "TIME",
  college: "BITS",
  // greet: function () {
  //   console.log("Good morning");
  // },
};

// accessing object attributes using dot notation
student.fav_game = "football";
console.log(student.name);
let inst1 = "school";
let inst2 = "college";

// accessing object attributes using array index notation
console.log(student[inst1]);
console.log(student[inst2]);
// console.log(student.inst1); // wont work

student.greet = function () {
  console.log("Good morning");
};
student.greet();

console.log(student);

student.displaySelf = function () {
  console.log(this);
};

student.displaySelf();
