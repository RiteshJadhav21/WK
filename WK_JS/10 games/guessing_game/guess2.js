let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let getInput = Number(prompt("Enter your guess"));

let compare = function () {
  if (getInput == secretNumber) {
    console.log("Success");
  } else if (getInput > secretNumber) {
    console.log("Too high!");
  } else if (getInput < secretNumber) {
    console.log("Too low!");
  }
};

compare();
