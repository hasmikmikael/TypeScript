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

    getBalance(): number {
        return this._balance;
    }
}

//Objects
let account = new Account(1, 'Hasmik', 0);
account.deposit(100);
console.log(account.getBalance());
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);