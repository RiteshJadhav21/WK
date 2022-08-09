const question = new Map([
  ["Nagaraj", 100],
  ["Karthik", 101],
  [102, "Pradeep"],
  [true, "back to office"],
  [
    [1, 2],
    ["hello", "world"],
  ],
]);
// console.log(question.get(""));
let key_itr = question.keys();
console.log(question.get(key_itr.next().value));
console.log(question.get(key_itr.next().value));
console.log(question.get(key_itr.next().value));
console.log(question.get(key_itr.next().value));
// console.log(question.get(key_itr.next().value));
// console.log(question.get(key_itr.next().value));
// let last_key = key_itr.next().value;
let last_key = [1, 2];
console.log(typeof last_key);
console.log(question.get(last_key));

// // Create a Map
// const employees = new Map([
//   ["Nagaraj", 100],
//   ["Karthik", 101],
//   ["Pradeep", 102],
// ]);

// console.log(employees.get("Nagaraj"));

// // another way to create a map
const employee = new Map();

// // adding elements to map
employee.set(true, "consultant");
employee.set([9, 6], ["in", "out"]);
// console.log(employee);
// console.log(employee.get([9, 6]));
// // retrieving elements from map
// console.log(employee.get(true));
