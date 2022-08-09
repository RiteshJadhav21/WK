// array of marks
var marks = [60, 76, 87, 56];
var sum = 0;
var avg = 0;
// simple for loop - the java style
for (var i = 0; i <= marks.length - 1; i++) {
  sum += marks[i];
}
console.log(sum);
avg = sum / marks.length;
console.log(avg);
var grade = "";
if (avg < 35) {
  grade = "D";
} else if (avg >= 35 && avg < 50) {
  grade = "C";
} else if (avg >= 50 && avg < 80) {
  grade = "B";
} else grade = "A";

console.log(grade);

switch (grade) {
  case "A":
    console.log("Excellent. Keep it up.");
    break;
  case "B":
    console.log("Well done. Can do better.");
    break;
  case "C":
    console.log("Need to work hard.");
    break;
  case "D":
    console.log("Uh oh. Better luck next time.");
    break;
  default:
    console.log("That looks strange to me.");
    break;
}
