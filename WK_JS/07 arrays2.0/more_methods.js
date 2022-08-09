const balanceChanges = [200, 500, -300, 1000, 800, -900];
// console.log(balanceChanges[balanceChanges.length - 1]);
// console.log(balanceChanges[-1]);
// console.log(balanceChanges.at(-1));

// forEach applied to an array
// balanceChanges.forEach(function (change, index) {
//   if (change > 0)
//     console.log(
//       `Transaction ${index + 1}: ${change} is credited to your account.`
//     );
//   else
//     console.log(
//       `Transaction ${index + 1}: ${Math.abs(
//         change
//       )} is debited from your account.`
//     );
// });

// forEach applied to a Map
const currencies = new Map([
  ["INR", "Indian Rupee"],
  ["AED", "Aram Emirates Dirham"],
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
]);

// currencies.forEach(function (value, key) {
//   console.log(`The code for ${value} is the ${key}.`);
// });

// forEach applied to a set
const transactions = [300, 600, -500, 300, -600, 3000, 400, -700];
const uniqueAmounts = new Set(transactions);
// console.log(uniqueAmounts);

// let finalBalance = 0;
// uniqueAmounts.forEach(function (amount) {
//   console.log((finalBalance += amount));
// });

// find method
const firstNegativeVal = transactions.find(function (item) {
  return item <= 0;
});

// console.log(firstNegativeVal);

const firstNegativeValIndex = transactions.findIndex(function (item) {
  return item <= 0;
});
// console.log(firstNegativeValIndex);

// includes accespts an element and returns true if it is present in array or false otherwise
// similar to indexOf but instead of index directly returns true or false
// console.log(transactions.includes(3000));
// console.log(transactions.indexOf(400));

// some and every methods
// [300, 600, -500, 300, -600, 3000, 400, -700]
// const someResult = transactions.some(function (item) {
//   console.log(item);
//   return item >= 3000;
// });

// console.log(someResult);

// [300, 600, -500, 300, -600, 3000, 400, -700]
// const everyResult = transactions.every(function (item) {
//   console.log(item);
//   return item >= -700;
// });

// console.log(everyResult);

// flat and flatMap
const nestedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
// console.log(nestedArray.flat());
// console.log(nestedArray);

const deepNestedArray = [
  [1, [2, 3]],
  [4, 5],
  [6, [7, 8]],
];
// console.log(deepNestedArray.flat());
// console.log(deepNestedArray.flat(2));

const nagaraj = {
  cName: "Nagaraj",
  transactions: [1000, -500, 200, 400, -300],
};

const karthik = {
  cName: "Karthik",
  transactions: [2000, -600, 300, 500, -400],
};

const pradeep = {
  cName: "Pradeep",
  transactions: [3000, -700, 400, 600, -500],
};
