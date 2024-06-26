//Type Aliases
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void
}

let empl: Employee = { 
    id: 1, 
    name: 'Hasmik',
    retire: (date: Date) => 
        console.log(date)
};

//Union Types
function KgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

KgToLbs(10);
KgToLbs('10kg');

//Intersection Types
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types
//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

//Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase)
    else
      console.log('Hola!');
}

greet(undefined);

//Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// (if (customer !== null && customer !== undefined)
//   console.log(customer.birthday);) or
//console.log(customer?.birthday);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined) or
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');


//The Nullish Coaelscing Operator
let speed: number | null = null;
let ride = {
    //Falsy (undefined, null, '', false, 0)
    //speed: speed !== null ? speed : 30
    //Nullish coalescing operator
    speed: speed ?? 30
}

//Type Assertions
let phone = document.getElementById('phone') as HTMLInputElement;
//let phone = <HTMLInputElement> document.getElementById('phone');
// HTMLElement
// HTMLInputElement
phone.value

//The unknown Type
function renderDocument(document: unknown) {
    // document.move();
    // document.fly();
    // document.whateverWeWant();
    
    //Narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }   
}

//The never Type
function processEvents(): never {
    while (true) {
        //Read a message from a queue
    }
}

function reject(message: string): never {
    throw new Error(message);
}

processEvents(); //or reject('...'); 
//console.log('Hello World!'); // unreachable code