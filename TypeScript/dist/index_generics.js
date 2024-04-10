"use strict";
class NumberKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class StringKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new StringKeyValuePair('1', 'Apple');
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, 'a');
class ArrayUtils {
    static WrapInArray(value) {
        return [value];
    }
}
let numbersArray = ArrayUtils.WrapInArray('1');
function fetch(url) {
    if (url.length > 0)
        return { data: null, error: null };
    return { data: null, error: null };
}
let result1 = fetch('url');
let result2 = fetch('url');
function echo1(value) {
    return value;
}
echo1('1');
function echo2(value) {
    return value;
}
echo2({ name: 'a' });
function echo3(value) {
    return value;
}
echo3({ name: 'a' });
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
class Customer2 extends Person2 {
}
function echo4(value) {
    return value;
}
console.log(echo4(new Person2('a')));
console.log(echo4(new Customer2('a')));
//# sourceMappingURL=index_generics.js.map