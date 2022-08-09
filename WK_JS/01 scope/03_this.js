// console.log(this);

student = {
  firstName: "Sreekar",
  stdClass: 8,
  birthYr: 2009,

  calcAgeExpr: function () {
    return 2022 - this.birthYr;
  },

  //   calcAgeArrow: () => 2022 - this.birthYr,
};

// const studentAge = student.calcAgeExpr();
// console.log(studentAge);

const studentAgeArrow = student.calcAgeArrow();
console.log(studentAgeArrow);

// let calcAgeArrow = (birthYr) => 2022 - birthYr;
// console.log(calcAgeArrow(2009));
