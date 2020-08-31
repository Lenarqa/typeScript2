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
    name: 'Vladilen',
    age: 23
};
function getObjValue(obj, key) {
    return obj[key];
}
console.log(getObjValue(person, 'name'));
console.log(getObjValue(person, 'age'));
