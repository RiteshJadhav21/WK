/**
 * Logic:Generate a random number between 1 and 20. Call it secretNumber.
 * User starts guessing. Take input from the user as a first guess.
 * Initialize scroe to 20
 * and High Socre to 0
 * 3 possibilities:
 * if input == secretNumber then user guessed correct.
 *      Update score and high score and display appripriate message.
 *      End game.
 * if input < secretNumber:
 *      Reduce score by 1
 *      display appropriate message (too high)
 * if input > secretNumber:
 *      Reduce score by 1
 *      display appropriate message (too low)
 * On clicking play again, reset score to 20. Leave high score as it is.
 *
 */
console.warn("You are about to start game");
console.error("You are about to start game");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let userInput;
let score = 20;
let highScore = 0;
let statusMsg = "Start guessing!!!";

const reset = function () {
  score = 20;
  statusMsg = "Start guessing!!!";
  displayStatusAndScore(score, highScore, statusMsg);
  document.querySelector("#number").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.color = "#eee";
};

const displayStatusAndScore = function (score, highScore, statusMsg) {
  document.querySelector("#score").textContent = `Score: ${score}`;
  document.querySelector("#highScore").textContent = `High Score: ${highScore}`;
  document.querySelector("#msg").textContent = `${statusMsg}`;
};

displayStatusAndScore(score, highScore, statusMsg);

const getInput = function () {
  userInput = Number(document.querySelector("#number").value);
  console.log(userInput);
};

const guessNumber = function () {
  // debugger;
  userInput = Number(document.querySelector("#number").value);
  if (score !== 0) {
    if (userInput > secretNumber) {
      score--;
      statusMsg = "Too high.";
      displayStatusAndScore(score, highScore, statusMsg);
    } else if (userInput < secretNumber) {
      score--;
      statusMsg = "Too low.";
      displayStatusAndScore(score, highScore, statusMsg);
    } else {
      if (score > highScore) highScore = score;
      statusMsg = "Guessed it right.";
      displayStatusAndScore(score, highScore, statusMsg);
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector("body").style.color = "#222";
    }
  } else {
    statusMsg = "You lost the game.";
    displayStatusAndScore(score, highScore, statusMsg);
  }
};

document.querySelector("#check").addEventListener("click", guessNumber);
document.querySelector("#playAgain").addEventListener("click", reset);
