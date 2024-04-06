"use strict";
let empl = {
    id: 1,
    name: 'Hasmik',
    retire: (date) => console.log(date)
};
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let metric = 'cm';
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola!');
}
greet(undefined);
//# sourceMappingURL=index_advanced.js.map