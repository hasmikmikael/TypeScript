"use strict";
var _a;
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
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index_advanced.js.map