class Account {
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // property defined for internal usage
    this.transactions = [];
    this.approvedLoanAmount = 0;

    console.log(
      `Welcome to XYZ Bank, ${owner}. Your account is opened successfully.`
    );
  }

  deposit(amount) {
    this.transactions.push(amount);
  }

  withdraw(amount) {
    //   this.transactions.push(-amount);
    this.deposit(-amount);
  }

  #approveLoan(amount) {
    this.approvedLoanAmount = amount;
    return true;
  }

  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.deposit(this.approvedLoanAmount);
      console.log(
        `Loan Approved. Loan amount of ${this.currency}${this.approvedLoanAmount} is disbursed and credited to your account successfully.`
      );
    } else {
      console.log(`Loan Rejected. Please contact your branch.`);
    }
  }
}

const nagAcc = new Account("Nagaraj", "INR", 1111);
// we can directly modify internal property like transaction
// but not recommended

// nagAcc.transactions.push(5000);
// nagAcc.transactions.push(-2000);

// recommended to add instance methods and use them
// we can also abstract details like entering negative number for withdrawal in the methods
nagAcc.deposit(9000);
nagAcc.withdraw(3000);

// its all fine but we are able to directly access and modify sensitive data like pin
// console.log(nagAcc.pin);
// nagAcc.#pin = 2222;
// nagAcc.#approveLoan(100000);
nagAcc.requestLoan(10000);
console.log(nagAcc);
