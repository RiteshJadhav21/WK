// class definition
class Student {
  static school = "TIME";
  constructor(sName, sAge) {
    this.sName = sName;
    this.sAge = sAge;
  }

  calcBirthYear() {
    return 2022 - this.sAge;
  }

  //   static method definition
  static getNumberOfProperties = function () {
    const numProps = Student.length;
    return numProps;
  };
}

const sreekar = new Student("Sreekar", 13);
console.log(sreekar.calcBirthYear());

// static methid can be accessed only on class
console.log(Student.getNumberOfProperties());
console.log(Student.school);

// not available for individual objects
// console.log(sreekar.getNumberOfProperties());

console.log(sreekar);

class Test {
  static testType = "online";
}

onlineTest = new Test();

Test.showTestType = function () {
  console.log(Test.testType);
};

Test.showTestType();
