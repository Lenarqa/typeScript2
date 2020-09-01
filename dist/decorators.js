"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('decorators');
function Log(construcor) {
    console.log("Log");
    console.log(construcor);
}
function Log2(target, propName) {
    console.log("Log2");
    console.log(target);
    console.log(propName);
}
function Log3(target, propName, descriptor) {
    console.log("Log3");
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "componentName", null);
__decorate([
    Log3
], Component.prototype, "logName", null);
Component = __decorate([
    Log
], Component);
function ComponentFun(config) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
let Component2 = class Component2 {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component2 name = ${this.name}`);
    }
};
Component2 = __decorate([
    ComponentFun({
        selector: "#card",
        template: `
        <div class="card">
            <div class="card-content">
                <h1>Card №1</h1>
            <div> 
        <div>
    `
    })
], Component2);
const card = new Component2('My card component!');
