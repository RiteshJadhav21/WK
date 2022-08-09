// array destructuring
// let arr = [2, 3, 4];
// [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const timings = {
//   mon: {
//     open: 12,
//     close: 23,
//   },
// };
// // console.log(opening_hrs);
// const { mon: monday_timings } = timings;
// console.log(monday_timings);
// let { open: t1, close: t2 } = timings;
// console.log(t1, t2);

// a = [1, 2, 3];
// console.log(a);
// let [x, ...y] = [...a];
// console.log(x);
// console.log(y);

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// // const combined = [...numbersOne, ...numbersTwo];
// // const combined = [numbersOne, numbersTwo];
// console.log(combined);

// const numbers = [1, 2, 3, 4, 5, 6];

// // const [one, two, ...rest] = numbers;
// const [x, ...rest] = numbers;
// console.log(rest);

// function display(...vars) {
//   console.log(vars);
// }

// display(1);
// display(1, 2);
// display(1, 2, 3);

// const pizzaHut = {
//   name: "Pizza Hut",
//   location: "Road No. 12, Banjara Hills, Hyderabad.",
//   categories: ["pizzas", "sides", "desserts", "drinks"],
//   sides: ["garlic bread", "bread sticks", "pasta", "rolls", "poppers"],
//   opening_hrs: {
//     mon: {
//       open: 12,
//       close: 23,
//     },
//     tue: {
//       open: 12,
//       close: 23,
//     },
//   },

//   order: function (catIndex, stIndex) {
//     return [this.categories[catIndex], this.sides[stIndex]];
//   },
// };

// console.log(pizzaHut.categories);
// partial destructuring
// let [category1, , cat3] = pizzaHut.categories;
// console.log(category1, cat3);

// console.log(pizzaHut.categories);

// swapping variables using destructuring
// [category1, category2] = [category2, category1];
// console.log(category1, category2);

// // swapping variables the usual way
// tempCat = category1;
// category1 = category2;
// category2 = tempCat;
// console.log(category1, category2);

// destructuring function call
// console.log(pizzaHut.order(2, 4));
// const [ord1, ord2] = pizzaHut.order(2, 4);
// console.log(ord1, ord2);

// destructuring nested arrays
// const nested = [2, 3, [4, 5]];
// const [e1, e2, [e3, e4]] = nested;
// console.log(nested);
// console.log(e1, e2, e3, e4);

// // default values while destructuring
const nums = [8, 9];
nums.push(10);
console.log(nums);
// const [a = 0, b = 0, c = 0] = nums;
// const [a = 0, b = 0, c = 0, d = 0] = nums;
// const [a = 0, , c = 0, d = 0] = nums; // partial destructuring
console.log(a, c, d);
