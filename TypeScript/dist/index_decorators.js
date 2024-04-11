"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now;
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
class Component1 {
    insertInDOM() { }
}
class ProfileComponent1 extends Component1 {
}
function Component2(value) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now;
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
let ProfileComponent2 = class ProfileComponent2 {
};
ProfileComponent2 = __decorate([
    Component2(1)
], ProfileComponent2);
function Component3(options) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now;
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
let ProfileComponent3 = class ProfileComponent3 {
};
ProfileComponent3 = __decorate([
    Component3({ selector: '#my-profile' })
], ProfileComponent3);
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
let ProfileComponent4 = class ProfileComponent4 {
};
ProfileComponent4 = __decorate([
    Component3({ selector: '#my-profile' }),
    Pipe
], ProfileComponent4);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    };
}
class Person3 {
    say(message) {
        console.log('Person says ' + message);
    }
}
__decorate([
    Log
], Person3.prototype, "say", null);
let person = new Person3();
person.say('Hello');
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person4.prototype, "fullName", null);
let person4 = new Person4('tim', 'smith');
console.log(person4.fullName);
//# sourceMappingURL=index_decorators.js.map