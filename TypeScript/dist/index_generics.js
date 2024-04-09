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
//# sourceMappingURL=index_generics.js.map