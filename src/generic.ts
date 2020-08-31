// // const cars: Array<string> = ['ford', 'audi']

// const promise = new Promise<string>(resolve =>{
//     setTimeout(()=>{
//         resolve("Promise resolve");
//     }, 2000);
// });

// promise.then( date => {
//     console.log(date.trim().toUpperCase());
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R{
    return Object.assign({}, a, b);
}

const merge = mergeObjects({name: 'vladilen'}, {age: 24});
const merge2 = mergeObjects({mogal: 'vladilen'}, {version: 1});
const merge3 = mergeObjects({a: 1}, {b: 2});
console.log(merge.name);
merge2.version = 2;
console.log(merge3);

// =============================
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return{
        value,//value: value ES6
        count: `В этом объексте ${value.length} символов.`
    }
}

console.log(withCount("Hello world"));
console.log(withCount([1, 2, 3]));
// console.log(withCount(10));//error number no has length

const person = {
    name: 'Lenarqa',
    age: 23
}

function getObjValue<T extends object, R extends keyof T>(obj: T, key: R){
    return obj[key];
}

console.log(getObjValue(person, 'name'));
console.log(getObjValue(person, 'age'));
