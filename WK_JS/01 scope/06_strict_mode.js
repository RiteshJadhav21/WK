// global strict mode
// "use strict";
// cannot use variables without declaring first
// x = 5;
// console.log(x);

// print();

function print() {
  // local strict mode
  //   "use strict";
  y = 5;
  console.log(y);
}

// cannot delete variables or functions or objects
let z = 10;
delete z;
