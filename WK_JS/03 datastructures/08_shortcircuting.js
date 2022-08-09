// how we used || (or) operator
// const a = 0;
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);

// how else we can use
console.log(a || b);

console.log("" || "Nagaraj");
console.log(true || 0);
console.log(undefined || null);

const job = "";
const occupation = job ? job : "not working";
const msg = `He is ${occupation}`;
console.log(msg);

// this way of using or operator is called short circuting
const msg1 = `He is ${job || "not working"}`;
console.log(msg1);

// short circuting is applicable to && (and) operator also
// && works exactly opposite to ||
console.log(0 && "Nagaraj");
console.log(45 && "Nagaraj");
