// Exercise 1: Convert the function below to a generic function:
// function echo(arg) { return arg; }

// Solution 1
function echo<T>(arg: T): T { return arg; }

// Exercise 2: When compiling the following piece of code, we get an error saying ‘Property name 
//does not exist on type T’. How can we solve this problem?
// function printName<T>(obj: T) {
//     console.log(obj.name);
// }

// Solution 2
function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

// Exercise 3: An Entity should have a unique identifier. The type of identifier, however, is dependent 
//on the use case. In some cases, the ID might be a number, in other cases, it might be a 
//string, GUID, etc. Represent the entity using a generic class.

// Solution 3
class Entity<T> {
    constructor(public id: T) {}
}

// Exercise 4: Given the following interface, what does keyof User return?
interface UserEx4 { 
    userId: number; 
    username: string;
}

// Solution 4
// It returns a union of the properties of UserEx4: 'userId' | 'username'
