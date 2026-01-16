class BankAccount{
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(t_amount){
    if(t_amount > 0){
      this.transactions.push({
        type: "deposit",
        amount: t_amount,
      });
      this.balance += t_amount;
      return `Successfully deposited $${t_amount}. New balance: $${this.balance}`;
    }
    else{
      return `Deposit amount must be greater than zero.`;
    }
  }

  withdraw(t_amount){
    if(t_amount > 0 && t_amount <= this.balance){
      this.transactions.push({
        type: "withdraw",
        amount: t_amount,
      });
      this.balance -= t_amount;
      return `Successfully withdrew $${t_amount}. New balance: $${this.balance}`;
    }
    else{
      return `Insufficient balance or invalid amount.`;
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let deposits = [];
    this.transactions.forEach((transaction) => {
      if (transaction.type == "deposit") {
        deposits.push(transaction.amount);
      }
    });
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    let withdrawals = [];
    this.transactions.forEach((transaction) => {
      if (transaction.type == "withdraw") {
        withdrawals.push(transaction.amount);
      }
    });
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(10000);
myAccount.withdraw(400);
myAccount.withdraw(2000);
myAccount.deposit(5000);
myAccount.deposit(1000);