// immediately invoked function expression

// usual function expression
const calcSum = function (num1, num2) {
  return num1 + num2;
};

console.log(calcSum(29, 30));

(function (num1, num2) {
  console.log(num1 + num2);
})(3, 4);
