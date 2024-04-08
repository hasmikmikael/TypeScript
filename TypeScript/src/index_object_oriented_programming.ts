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


//Static Members
class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++; };
    stop() { Ride._activeRides--; };

    static get activeRides() {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);


//Inheritance
class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    protected walk() {
        console.log('Walking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log("Taking a test");
    }
}

let student = new Student(1, 'John', 'john@gmail.com');
student.takeTest();


//Method Overriding
class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);

//Polymorphism
class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}

function printNames(people: Person[]) {
    for (let person of people)
        console.log(person.fullName);
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Tim', 'Moris'),
    new Principal('Mary', 'Smith')
]);


//Abstract Classes and Methods
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('Rendering a circle.');
    }
}

let circle = new Circle(2, 'red');
circle.render();