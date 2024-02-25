class Account {
  // readonly id: number;
  // owner: string;
  // private variable naming convention
  // private _balance: number;
  // tax: number;
  // taxamount: number;
  nickname?: string;

  constructor(
    readonly id: number,
    public owner: string,
    private _balance: number,
    public tax: number,
    public taxamount: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid Amount');
    }
    this._balance += amount;
    this.taxamount = this.calculateTax();
  }

  private calculateTax() {
    return this._balance - this.tax;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
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

// cannot access balance varible outside of Account class
// console.log(account._balance)
// how to get accout balance - we can only get using
// getter method
console.log(account.balance);

// setting the value for balance using setter method
account.balance = 23;

console.log(account.taxamount);
