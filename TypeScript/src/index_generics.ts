//Understanding the Problem
class NumberKeyValuePair {
    constructor(public key: number, public value: string) {}
}

class StringKeyValuePair {
    constructor(public key: string, public value: string) {}
}

let pair1 = new StringKeyValuePair('1', 'Apple');

//Generic Classes
class KeyValuePair<K, V> { //<T>  <T, U>  <TKey, TValue>  <K, V>
    constructor(public key: K, public value: V) {}
}

//let pair = new KeyValuePair<number, string>('1', 'a'); //or
let pair = new KeyValuePair(1, 'a');
//pair.key.
//pair.value.

// Generic Functions 
// function WrapInArray<T>(value: T) {
//     return [value];
// }

// let numbersArray = WrapInArray('1');

class ArrayUtils {
    // WrapInArray<T>(value: T) {
    //     return [value];
    // }

    static WrapInArray<T>(value: T) {
        return [value];
    }
}

// let utils = new ArrayUtils();
// let numbersArray = utils.WrapInArray('1');

let numbersArray = ArrayUtils.WrapInArray('1');

//Generic Interfaces
//http://mywebsite.com/users
//http://mywebsite.com/products

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    if (url.length > 0)
        return { data: null, error: null };
    return { data: null, error: null };
}

interface Users {
    userName: string;
}

interface Product {
    title: string;
}

let result1 = fetch<Users>('url');
//result1.data?.userName;

let result2 = fetch<Product>('url');
//result2.data?.title;


//----------------Generic Constraints-------------------
function echo1<T extends number | string>(value: T): T {
    return value;
}

echo1('1');

// Restrict using a shape object
function echo2<T extends { name: string}>(value: T): T {
    return value;
}

echo2({ name: 'a' }); //or

// Restric using an interface or a class
interface Person1 {
    name: string;
}

function echo3<T extends Person1>(value: T): T {
    return value;
}

echo3({name: 'a'}); 

//or

class Person2 {
    constructor(public name: string) {}
}

class Customer2 extends Person2 {

}

function echo4<T extends Person2>(value: T): T {
    return value;
}

console.log(echo4(new Person2('a')));
console.log(echo4(new Customer2('a')));