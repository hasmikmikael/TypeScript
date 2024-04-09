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