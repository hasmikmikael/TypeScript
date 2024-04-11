//---------------Class Decorators------------------
function Component(constructor: Function) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId =  Date.now;
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}

@Component
class ProfileComponent {
}
//when we run the above code we will get 
//> Component decorator called
//Even though we didn't create any instances of Profile component. 
//Wether we have 0 or 10 instanses decorator is called onced and yhis is owr change to modify our classes.

//We can also solve this problem using inheritance. 
//Instead of defining a decorator we can create base class
class Component1 {
    insertInDOM() {}
}

class ProfileComponent1 extends Component1 {
}

//---------------Parameterized Decorators----------
//Decorator Factory
function Component2(value: number) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId =  Date.now;
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    }
}

@Component2(1)
class ProfileComponent2 {
}

/////////////////////////
type ComponentOptions = {
    selector: string;
}
//Decorator Factory
function Component3(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId =  Date.now;
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    }
}

@Component3({ selector: '#my-profile' })
class ProfileComponent3 {
}

//-----------------Decorator Composition---------
function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}

@Component3({ selector: '#my-profile'})
@Pipe
// f(g(x))
class ProfileComponent4 {
}

//-----------------Method Decorators-------------
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    //descriptor.value = function() {
    //descriptor.value = function(message: string) {
    descriptor.value = function(...args: any) {
        console.log('Before');
        //original.call(this, 'Blue Sky');
        //original.call(this, message);
        original.call(this, ...args)
        console.log('After');
    }
}

class Person3 {
    @Log
    say(message: string) {
        console.log('Person says ' + message);
    }
}

let person = new Person3();
person.say('Hello');


//--------Accessor Decorators--------
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        // if (typeof result === 'string')
        //     return result.toUpperCase();
        // return result;
        return (typeof result === 'string') ? result.toUpperCase() : result;
    } 
}

class Person4 {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person4 = new Person4('tim', 'smith');
console.log(person4.fullName);

//--------------Property Decorators---------------
function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long.`);
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User4 {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

// let user4 = new User4('123');
let user4 = new User4('1234');
//user4.password = '1';
console.log(user4.password);


//-------------Parameter Decorators--------
type WatchedParameter = {
    methodName: string;
    parameterIndex: number;
}

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    })
}

class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchedParameters);