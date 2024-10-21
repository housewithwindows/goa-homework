class BankAccount {
    #balance;  // private property

    constructor(balance = 0) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited: ${amount}. New Balance: ${this.#balance}`;
        }
        return "Deposit amount must be positive.";
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrawn: ${amount}. New Balance: ${this.#balance}`;
        }
        return "Insufficient balance or invalid amount.";
    }
}

// Create an instance of BankAccount
let account = new BankAccount(100);

// Test deposit and withdraw methods
console.log(account.deposit(50));
console.log(account.withdraw(30));
