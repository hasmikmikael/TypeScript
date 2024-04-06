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