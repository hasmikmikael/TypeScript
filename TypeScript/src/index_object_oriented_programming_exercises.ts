// Exercise 1: Define a class called Logger that takes the name of a file in its constructor and provides 
// a method for writing messages to that file. Don’t worry about the actual file I/O 
// operations. Just define the class with the right members.

// Solution 1
class Logger {
    constructor(public logFile: string) {}

    log(message: string) {
        console.log(message);
    }
}

// Exercise 2: Given the PersonEx class below, create a getter for getting the full name of a person.
// class PersonEx { 
//     constructor(public firstName: string, public lastName: string) {}
//    }

//Solution 2
class PersonEx { 
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Exercise 3: Create a new class called EmployeeEx that extends Person and adds a new property 
// called salary.

//Solution 3
class EmployeeEx extends PersonEx {
    constructor(
      public salary: number, 
      firstName: string, 
      lastName: string) {
        super(firstName, lastName);
      }
}


// Exercise 4: What is the difference between private and protected members?
// Solution 4: Private members are not inherited by child classes.


// Exercise 5: Given the data below, define an interface for representing employees: 
// let employeeEx = {
//     name: 'John Smith',
//     salary: 50_000,
//     address: {
//       street: 'Flinders st',
//       city: 'Melbourne',
//       zipCode: 3144,
//     },
// };

// Solution 5
interface EmployeeEx {
    name: string;
    salary: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    zipCode: number;
}