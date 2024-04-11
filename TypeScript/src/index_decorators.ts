// Class Decorators
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