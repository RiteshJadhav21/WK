// sets and maps are newly introduced data structures in ES6
// like other programming languages set is used to store unique values

const listOfStudents = ["Nagaraj", "Karthik", "Pradeep", "Karthik"];
const setofStudents = new Set(listOfStudents);
// console.log(listOfStudents);
// console.log(setofStudents);

// const nums = new Set();
// nums.add(1);
// console.log(nums);
// // set size
// console.log(setofStudents.size);

// // checking membership
// console.log(setofStudents.has("Sreekar"));

// adding and deleting elements
// setofStudents.add("Sreekar");
// setofStudents.delete("Nagaraj");
// console.log(setofStudents);

// setofStudents.clear();
// console.log(setofStudents);

// how to extract elements of a set
// well there is no way to extract individual elements as set is unordered

// looping over a set
// for (let student of setofStudents) console.log(student);

// set iterator
let itr = setofStudents.values();

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

// // similar to arrays we can write a function and call it for each element of set using forEach
// function display(item) {
//   console.log(item);
// }

// // for (let student of setofStudents) display(student);

// setofStudents.forEach(display);

// display("some string");
// setofStudents.forEach(display);
