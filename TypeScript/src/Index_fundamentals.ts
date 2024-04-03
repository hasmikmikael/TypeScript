//The any Type
let level;
level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}


//Arrays
//In Javascript
let numbers = [1, 2, '3'];

//In TypeScript
//let num: number[] = [1, 2, 3];
//or
//let num = [1, 2, 3];
//in this case we have any array
// let num = [];
// num[0] = 1;
// num[1] = "1";
let num: number[] = [];
//num.forEach(n => n.)


//Tuples
// 1, 'Hasmik'
let user: [number, string] = [1, 'Hasmik'];
// user[0].
// user[1].
//user.
//user.push(1); //this method adds the element without adding type, which is not good


//Enums
// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase - Pascal naming convention
//by default starts from 0 ex. Small = 0
const enum Size { Small = 1, Medium, Large };
//enum Size { Small = 's', Medium = 'm', Large = 'l' };

let mySize: Size = Size.Medium;
console.log(mySize);


//Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}


//Objects
let employee: {
    readonly id: number;
    name: string;
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Hasmik',
    retire: (date: Date) => 
        console.log(date)
};
