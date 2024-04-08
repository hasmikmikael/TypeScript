"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Hasmik', 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'John';
seats.A2 = 'Tim';
//# sourceMappingURL=index_object_oriented_programming.js.map