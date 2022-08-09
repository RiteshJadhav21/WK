function one() {
  console.log("In one. Calling two.");
  two();
}

function two() {
  console.log("In two. Calling three.");
  three();
}

function three() {
  console.log("In three");
}

one();
