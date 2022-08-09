console.log(b());
console.log(a());

const a = function (val) {
  return 5;
}; // TDZ

function b() {
  return 10;
}
// // hoisting - variable
// console.log(firstName);
// console.log(job);
// // console.log(city);

// var firstName = "Nagaraj"; // hoisted but initialized to undefined
// console.log(firstName);
// let job = "Trainer"; // hoisted and kept in TDZ
// const city = "Hyderabad"; // hoisted and kept in TDZ

// hoisting - fucntions

// addDecl(3, 4);
// // addExpr(6, 1);
// // addArrow(9, 3);

// // is hoisted - works
// function addDecl(a, b) {
//   console.log(a + b);
// }

// // is hoisted but kept in TDZ - won't work
// const addExpr = function (a, b) {
//   console.log(a + b);
// };

// // is hoisted but initialized to undefined - won't work
// var addArrow = (a, b) => console.log(a + b);

// // hypothetical scenario
// if (!numProducts) deleteAllProducts();

// var numProducts = 10;
// function deleteAllProducts() {
//   console.log("All products deleted.");
// }
