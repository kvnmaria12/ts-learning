"use strict";
class Account {
    constructor(id, owner, _balance, tax, taxamount) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.tax = tax;
        this.taxamount = taxamount;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }
        this._balance += amount;
        this.taxamount = this.calculateTax();
    }
    calculateTax() {
        return this._balance - this.tax;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Invalid value');
        }
        this._balance = value;
    }
}
const account = new Account(1, 'Kevin', 40000, 0, 100);
account.deposit(500);
console.log(account instanceof Account);
console.log(account);
console.log(account.balance);
account.balance = 23;
console.log(account.taxamount);
//# sourceMappingURL=class.js.map