// Exercise 1: Given the data below, define a type alias for representing users
let users = [
    {
    name: 'John Smith',
    age: 30,
    occupation: 'Software engineer'
    },
    {
    name: 'Kate Müller',
    age: 28
    }
   ];

// Solution 1
type User = {
    name: string;
    age: number;
    occupation?: string;
};


// Exercise 2: Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these 
// Solution 2
type Bird = {
    fly: () => void;
};

type Fish = {
    swim: () => void;
}

type Pet = Bird | Fish;


// Exercise 3: Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
// Solution 2
type DayOfWeek = 'Monday' | 'Tuesday';

// Exercise 4: Simplify the following code snippets
// let userDetail = getUser();
// console.log(userDetail && userDetail.address ? userDetail.address.street : undefined);

// let x = foo !== null && foo !== undefined ? foo : bar();

// Solution 4
// let user = getUser();
// console.log(user?.address?.street);

// let x = foo ?? bar();


// Exercise 5: What is the problem in this piece of code?
//let value: unknown = 'a'; 
//console.log(value.toUpperCase());

// Solution 5
let value : unknown = 'a';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}



