class Info {
  public readonly id: number;
  public age: number;
  public name: string;
  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.age = age;
    this.name = name;
  }

  changeId(): void {
    // cannot change id because it's read only
    // this.id = 23;
  }

  printName(): string {
    // console.log(this);
    return this.name;
  }
}

const myInfo3 = new Info(1, 23, 'Kevin');
// console.log(myInfo3);
myInfo3.printName();

class Info2 {
  // to declare and initialize using single line
  constructor(private id: number, public name: string, public age: number) {}

  get myId() {
    return this.id;
  }
}
const info2 = new Info2(2, 'kvn', 23);
console.log(info2.myId);

// getters and setters
console.log('getters and setters');
class Account2 {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public tax: number,
    public taxAmount: number
  ) {}

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }
}

const account2 = new Account2(1, 'Kvn', 23000, 450, 0);
// getting the balance
console.log(account2.balance);
account2.balance = 12;
console.log(account2.balance);

// Index Signature
// to create dynamic properties
class SeatAssignment2 {
  // index signature
  [seat: string]: string;
}

const seatAssignment2 = new SeatAssignment2();
seatAssignment2.A1 = 'Kvn';
seatAssignment2.A2 = 'Daniel';
console.log('seatAssignment2', seatAssignment2);

// static variable and static methods
class Ride2 {
  static activeRides: number = 0;

  start() {
    Ride2.activeRides++;
  }

  stop() {
    Ride2.activeRides--;
  }
}

let ride4 = new Ride2();
ride4.start();

let ride5 = new Ride2();
ride5.start();

console.log(Ride2.activeRides);
