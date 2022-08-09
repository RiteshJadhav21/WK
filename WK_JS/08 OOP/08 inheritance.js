// base calss created with few attributes and a methos
class PersonCls {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2022 - this.birthYear;
  }
}

// sub class extends base class
// has an additional attribute
// base class attributes are set using the call to super
class StudentCls extends PersonCls {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  // sub class has a method
  displayCourse() {
    console.log(`${this.fullName} studies ${this.course}`);
  }

  //   overriding parent class method
  calcAge() {
    console.log(`I am ${2022 - this.birthYear} years old.`);
  }
}

// creating an object of sub class
const sreekar = new StudentCls("Sreekar B", 2009, "Comp. Sci.");
// has access to instance method of sub class
sreekar.displayCourse();
// also has access to method inherited from base class
sreekar.calcAge();
