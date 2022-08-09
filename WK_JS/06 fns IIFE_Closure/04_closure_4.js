function someFunction() {
  let someVar = 10; // local var
  return function () {
    // local function modifying the local var
    someVar += 10;
    console.log(someVar);
  };
  // incrementLocalVar();
  //   console.log(someVar);
}
const incrementor = someFunction();

setTimeout(incrementor, 10000);

//incrementor function stored the reference to the somefunction's local var in its closure
