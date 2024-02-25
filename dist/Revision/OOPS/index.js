"use strict";
class Info {
    constructor(id, age, name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
    changeId() {
    }
    printName() {
        return this.name;
    }
}
const myInfo3 = new Info(1, 23, 'Kevin');
myInfo3.printName();
class Info2 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    get myId() {
        return this.id;
    }
}
const info2 = new Info2(2, 'kvn', 23);
console.log(info2.myId);
console.log('getters and setters');
class Account2 {
    constructor(id, owner, _balance, tax, taxAmount) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.tax = tax;
        this.taxAmount = taxAmount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
const account2 = new Account2(1, 'Kvn', 23000, 450, 0);
console.log(account2.balance);
account2.balance = 12;
console.log(account2.balance);
class SeatAssignment2 {
}
const seatAssignment2 = new SeatAssignment2();
seatAssignment2.A1 = 'Kvn';
seatAssignment2.A2 = 'Daniel';
console.log('seatAssignment2', seatAssignment2);
class Ride2 {
    start() {
        Ride2.activeRides++;
    }
    stop() {
        Ride2.activeRides--;
    }
}
Ride2.activeRides = 0;
let ride4 = new Ride2();
ride4.start();
let ride5 = new Ride2();
ride5.start();
console.log(Ride2.activeRides);
//# sourceMappingURL=index.js.map