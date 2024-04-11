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
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
let store = new Store();
store.add({ name: 'tea', price: 10 });
class CompressibleStore extends Store {
    compress() { }
}
let compStore = new CompressibleStore();
compStore.compress();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category.length < 0)
            return [];
        return [];
    }
}
class Store2 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store2 = new Store2();
store2.add({ name: 'a', price: 1 });
store2.find('name', 'a');
store2.find('price', 1);
//# sourceMappingURL=index_generics.js.map