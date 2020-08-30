"use strict";
console.log('app.ts!!!');
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
const btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', () => {
        console.log('btn click');
    });
}
let anyType;
function showInfo(data) {
    console.log(data);
    anyType = true;
    console.log(anyType);
}
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return;
}
showInfo('Hello from show info!');
