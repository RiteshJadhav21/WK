const employee = {
  firstName: "Nagaraj",
  lastName: "Ravinuthala",
  age: 45,
  address: "Hyderabad",
  location: "Bangalore",
  job: "Consultant",
};

// console.log(employee);

// usual destructuring
// destructuring retaining original object attributes
// const { firstName, lastName, age } = employee;
// console.log(firstName, lastName, age);

// destructuring and renaming object attributes
// const { firstName: fName, lastName: lName, age } = employee;
// console.log(fName, lName, age);

// destructuring with rest operator
// const { location: loc, job: occupation, ...personalData } = employee;
// console.log(loc, occupation);
// console.log(personalData);

// const { ...employee2 } = employee; // rest
// console.log(employee2);
// employee2.age = 40;
// console.log(employee2);
// console.log(employee);

// const employee3 = { ...employee }; // spread
// console.log(employee3);
// employee3.age = 30;
// console.log(employee3);
// console.log(employee);

// gathering the rest of the elements using rest operator
// const { firstName: fName, lastName: lName, age, ...officialData } = employee;
// console.log(fName, lName, age);
// console.log(officialData);

// function add(p1, p2, p3) {
//   let sum = p1 + p2 + p3;
//   console.log(sum);
// }
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);

// fucntions using rest
function add(...params) {
  console.log(typeof params);
  console.log(params);
  let sum = 0;
  for (let param of params) sum += param; // for ... of
  console.log(sum);
}

// add(2);
// add(2, 3);
// add(2, 3, 4, 5, 6, 7);
// add(2, 3, 67, 34, 23);

// mixing rest and spread
// const nums = [34, 56, 90];
// add(...nums);

// we can use it to define functions with mandatory and optional parameters
const myFunction = function (
  name = "John Doe",
  age = 20,
  address = "Bangalore",
  ...others
) {
  console.log(name, age, address);
  console.log(others);
};

myFunction("Nagaraj", 45, "Hyderabad", "Consultant");
myFunction("Nagaraj");
myFunction();
