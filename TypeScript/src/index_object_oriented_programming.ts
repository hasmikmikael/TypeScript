//Classes
class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}

//Objects
let account = new Account(1, 'Hasmik', 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);