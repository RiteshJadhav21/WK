class Account {
  // public fields or properties
  transactions = [];
  approvedLoanAmount = 0;
  //   private fields or properties
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // property defined for internal usage

    console.log(
      `Welcome to XYZ Bank, ${owner}. Your account is opened successfully.`
    );
  }

  //   public methods
  deposit(amount) {
    this.transactions.push(amount);
  }

  withdraw(amount) {
    this.deposit(-amount);
  }

  #loanApproved() {
    if (this.transactions[0] == 10000) {
      return true;
    }
  }

  requestLoan(amount) {
    if (this.#loanApproved()) {
      console.log(
        `Your loan for amount ${amount} is approved and credited to your account.`
      );
      this.transactions.push(amount);
    }
  }
}

const nagAcc = new Account("Nagaraj", "INR", 1111);
nagAcc.transactions.push(10000);
nagAcc.transactions.push(-2000);
nagAcc.deposit(10000);
nagAcc.withdraw(2000);

// nagAcc.#pin = 2222;
nagAcc.requestLoan(5000);
console.log(nagAcc);

const nagAcc2 = new Account("Nagaraj", "INR", 2222);
nagAcc.#loanApproved();
nagAcc2.deposit(10000);
nagAcc2.requestLoan(5000);
console.log(nagAcc2);
