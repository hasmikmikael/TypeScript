"use strict";
class Logger {
    constructor(logFile) {
        this.logFile = logFile;
    }
    log(message) {
        console.log(message);
    }
}
class PersonEx {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class EmployeeEx extends PersonEx {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=index_object_oriented_programming_exercises.js.map