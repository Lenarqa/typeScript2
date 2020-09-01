"use strict";
// // const cars: Array<string> = ['ford', 'audi']
// const promise = new Promise<string>(resolve =>{
//     setTimeout(()=>{
//         resolve("Promise resolve");
//     }, 2000);
// });
// promise.then( date => {
//     console.log(date.trim().toUpperCase());
// })
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merge = mergeObjects({ name: 'vladilen' }, { age: 24 });
const merge2 = mergeObjects({ mogal: 'vladilen' }, { version: 1 });
const merge3 = mergeObjects({ a: 1 }, { b: 2 });
console.log(merge.name);
merge2.version = 2;
console.log(merge3);
function withCount(value) {
    return {
        value,
        count: `В этом объексте ${value.length} символов.`
    };
}
console.log(withCount("Hello world"));
console.log(withCount([1, 2, 3]));
// console.log(withCount(10));//error number no has length
const person = {
    name: 'Lenarqa',
    age: 23
};
function getObjValue(obj, key) {
    return obj[key];
}
console.log(getObjValue(person, 'name'));
console.log(getObjValue(person, 'age'));
//====================
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
// strings.add('Hello');
strings.remove('strings');
console.log(strings.items);
function createAndValidateCar(model, age) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (age > 2000) {
        car.age = age;
    }
    return car;
}
// ===============
const cars = ['Ford', 'Audi'];
// cars.shift(); //ошибка потому что cars readonly
cars[1];
const ford = {
    model: 'Ford',
    age: 2011
};
// ford.model = 'hello';//error 
