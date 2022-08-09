"use strict";

// global variables
// accessible every where
let firstName = "Sreekar";
let lastName = "R";
let stdClass = 8;
let birthYr; // tdz
let age; // tdz

function calcAge(birthYr) {
  // local variable
  const age = 2022 - birthYr;
  return age;
}

function displayDetails() {
  //   variables firstName and stdClass not defined here but can be used
  // const msg = `${firstName} is in class ${stdClass}.`;

  //   age variable is not declaed locally
  // its is declared globally but not initialized

  // const msg = `${firstName} is in class ${stdClass}. He is ${age} years old.`;

  // even if we call the caclAge function in which age gets initializes, it is not available outside as it is local
  let birthYr = 2009;
  // calcAge(birthYr);
  const msg = `${firstName} is in class ${stdClass}. He is ${calcAge(
    birthYr
  )} years old.`;
  console.log(msg);
}

// displayDetails();

const displayMessage = function () {
  const timeOfDay = "evening";

  if (timeOfDay === "evening") {
    let msg = `Good ${timeOfDay}`;
    var msg1 = "Its a great day.";
    let age1;
    age1 = calcAge(2009);
    console.log(msg);
    console.log(msg1);
    console.log(age1);
  }

  // console.log(msg);
  // console.log(msg1);
  // console.log(age1);
};

// console.log(msg1);
displayMessage();
