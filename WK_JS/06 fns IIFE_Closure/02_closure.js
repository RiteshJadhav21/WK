function parentFn() {
  // function belongs to global scope
  const parentVar = 10; // variable is local to parent function

  return function childFn() {
    // function is local to parent function
    console.log(parentVar * 10); // parent scope is available to children
  };
  //   childFn();
}
const chFn1 = parentFn(); // once this call is made function executes and removed from stack,
setTimeout(chFn1, 10000);
// chFn1(); // but even after parent function is no more available, child function has access to parent function variable

// let chFn2;
// function parentFn1() {
//   const parentVar = 10;

//   chFn2 = function () {
//     console.log(parentVar * 10);
//   };
// }

// parentFn1();
// chFn2();
