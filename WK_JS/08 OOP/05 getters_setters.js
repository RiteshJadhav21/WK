// object literal
// all objects in javascript have special properties called getter and setter properties
// these are termed ad accessor properties while the others are called data properties
// these special properties are used to get and set data properties of the object

// declarations

// const bankAccount = {
//   acctHolder: "Nagaraj",
//   transactionList: [500, 1000, -300, 600, -900, 700],

//   get latest() {
//     return this.transactionList.slice(-1).pop();
//     // return this.transactionList.pop();
//   },

//   set latest(amount) {
//     this.transactionList.push(amount);
//   },
// };

// console.log(bankAccount.latest);
// bankAccount.latest = -100;
// console.log(bankAccount.transactionList);

// same way getters and setters can be defined on classes as well
class BankAccount {
  constructor(acctHolder, transactionList) {
    this.acctHolder = acctHolder;
    this.transactionList = transactionList;
  }

  get latestTransaction() {
    return this.transactionList.pop();
  }

  set latestTransaction(amount) {
    this.transactionList.push(amount);
  }

  // get latest() {
  //   return this.transactionList.slice(-1).pop();
  // }

  // set latest(amount) {
  //   this.transactionList.push(amount);
  // }
}

const nagarajAccount = new BankAccount(
  "Nagaraj",
  [500, 1000, -300, 600, -900, 800]
);
console.log(nagarajAccount);

// console.log(nagarajAccount.latest);
// nagarajAccount.latest = -1000;
// console.log(nagarajAccount);

console.log(nagarajAccount.latestTransaction);
nagarajAccount.latestTransaction = 5000;
console.log(nagarajAccount);
