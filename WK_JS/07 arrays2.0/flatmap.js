const numArray = [1, 2, [3, 4, 5]];

const sqr = function (num) {
  return num * num;
};

// const array1 = numArray.flat();
// console.log(array1.flat());

// const sqrArray = numArray.flat().map(sqr);
// console.log(sqrArray);

// const sqrArray1 = numArray.flatMap(sqr);
// console.log(sqrArray1);

const strArray = ["this is a sample string", "which will be flattened"];
// console.log(strArray.map((s) => s.split(" ")).flat());
// console.log(strArray.flatMap((s) => s.split(" ")));

// const splitStrings = strArray.map((s) => s.split(" ")).flat();
const splitStrings = strArray.flatMap((s) => s.split(" "));
console.log(splitStrings);
