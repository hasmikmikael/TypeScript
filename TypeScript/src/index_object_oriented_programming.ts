//Classes
class Account {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    //private calculateTax() {}

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }

    // getBalance(): number {
    //     return this._balance;
    // }

    //Getter
    get balance(): number {
        return this._balance;
    }

    // //Setter
    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error('Invalid value');
    //     this._balance = value;
    // }
}

//Objects
let account = new Account(1, 'Hasmik', 0);
account.deposit(100);
// console.log(account.getBalance());
console.log(account.balance);
// account.balance = 1;
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);


//Index Signatures
class SeatAssignment {
    // A1, A2, ...
    // 'John', 'Tim', ...
    // A1: string;
    // A2: string;
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'John'; //or
//seats['A1'] = 'John';
seats.A2 = 'Tim';