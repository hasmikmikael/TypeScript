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