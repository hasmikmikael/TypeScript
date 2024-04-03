// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase - Pascal naming convention
//by default starts from 0 ex. Small = 0
const enum Size { Small = 1, Medium, Large };
//enum Size { Small = 's', Medium = 'm', Large = 'l' };

let mySize: Size = Size.Medium;
console.log(mySize);