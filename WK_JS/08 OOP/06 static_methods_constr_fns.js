// constructor function
function Student(sName, sAge) {
  this.sName = sName;
  this.sAge = sAge;

  this.calcBirthYear = function () {
    return 2022 - this.sAge;
  };
}

// object creation using constructor function
sreekar = new Student("Sreekar", 13);
console.log(`${sreekar.sName} is born in the year ${sreekar.calcBirthYear()}`);

// method which is attached directly to the constructor function
Student.getNumberOfProperties = function () {
  const numProps = Student.length;
  return numProps;
};

console.log(Student.getNumberOfProperties());

// not available to objects as it is not attached to the prototype
// console.log(sreekar.getNumberOfProperties());
