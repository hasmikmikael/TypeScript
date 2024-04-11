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