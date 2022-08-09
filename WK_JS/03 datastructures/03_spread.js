const categories = ["pizzas", "sides", "desserts", "drinks"];
const sides = ["garlic bread", "bread sticks", "pasta", "rolls", "poppers"];

// console.log(sides);
// console.log(...sides);
// // sides.push("new item");
// const new_arr = sides;
// new_arr.push("new elem");
// // for (item of sides) new_arr.push(item);
// console.log(sides);
// console.log(new_arr);

// // creating an extended array
// const new_sides = ["wedges", ...sides, "pasta"];
// const [a, b, c, d, e] = sides;

// const new_sides = ["wedges", ...sides, "pasta"];
// console.log(new_sides);
// console.log(sides);
// console.log(...new_sides);

// joining 2 arrays
// const foodItems = [...categories, ...sides];
// console.log(foodItems);

// initially spread operator used to works with all iterables and not just arrays
// like strings, maps, sets are iterables
// const myName = "Nagaraj";
// const letters = [...myName, "R"];
// console.log(letters);

// const displaySides = function (side1, side2, side3, side4, side5) {
//   console.log(side1, side2, side3, side4, side5);
// };

// displaySides(...sides);

//example of function showing use of params
// when more arguments are passed than the number of params, additional arguments will be ignored
// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2, 5, 6, 7, 8);

// now it works with objects too
// const person = {
//   firstName: "Nagaraj",
//   lastName: "Ravinuthala",
//   age: 45,
//   address: "Hyderabad",
// };

// const employee = { ...person, location: "Bangalore", job: "Consultant" };
// console.log(person);
// console.log(employee);

// // spread operator can now be used to copy objects without using Object.assign we saw previously
// const person2 = { ...person };
// person2.firstName = "Prasad";
// person2.age = 46;
// console.log(person2);
// console.log(person);
