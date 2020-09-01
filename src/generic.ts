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

//====================
class Collection<T extends number | string | boolean>{
    constructor(private _items: T[] = []){}

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter( i => i !== item);
    }

    get items(): T[] { 
        return this._items;
    }
}

const strings = new Collection(['I', 'am', 'strings']);
// strings.add('Hello');
strings.remove('strings');
console.log(strings.items); 

//========================
interface Car {
    model: string;
    age: number;
}

function createAndValidateCar(model: string, age: number) {
    const car: Partial<Car> = {};

    if(model.length > 3) {
        car.model = model;
    }

    if(age > 2000) {
        car.age = age;
    }

    return car as Car;
}

// ===============
const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift(); //ошибка потому что cars readonly
cars[1];

const ford: Readonly<Car> = {
    model: 'Ford',
    age: 2011
}

// ford.model = 'hello';//error 