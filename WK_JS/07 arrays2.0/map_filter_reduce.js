"use strict";
const amountsInUSD = [200, 500, -300, 1000, 800, -900];

const usdToINR = 76.19;

// map function accepts a callback function that acts on a single element
// it then maps the function to each element of the array
// and store the results in a different array
// const amountsInINR = amountsInUSD.map(function (item) {
//   return item * usdToINR;
// });

// const usdToInrFn = (item) => item * usdToINR

const amountsInINR = amountsInUSD.map((item) => item * usdToINR);

console.log(amountsInUSD);
console.log(amountsInINR);

// filter works similar to map
// contains a condition which is checked for each element of an array
// array elements satisfying the condition will be added to a new array
// elements not satisfying will be ignored

// const positiveAmounts = amountsInUSD.filter(function (item) {
//   if (item > 0) return item;
// });

const positiveAmounts = amountsInUSD.filter((item) => {
  if (item > 0) return item;
});

console.log(positiveAmounts);

// similar to above functions reduce works on each array element
// instead of returning an array reduce returns a single value
// the calculation used to reduce the array into a single value is specified by the callback function

// let initBalance = 100;
// let finalBalance = amountsInUSD.reduce(function (result, item) {
//   return (result += item);
// });

let finalBalance = amountsInUSD.reduce((result, item) => (result += item));

console.log(finalBalance);
