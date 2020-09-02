// console.log('decorators');

// function Log(construcor: Function) {
//     console.log("Log")
//     console.log(construcor);
// }

// function Log2(target: any, propName: string | Symbol) {
//     console.log("Log2")
//     console.log(target);
//     console.log(propName);
// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log("Log3")
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }

// @Log
// class Component {
//     @Log2
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     @Log3
//     get componentName() {
//         return this.name;
//     }

//     @Log3
//     logName(): void {
//         console.log(`Component name: ${this.name}`);
//     }
// }
// // ==================================
// interface ComponentDecorator {
//     selector: string;
//     template: string;
// }

// function ComponentFun(config: ComponentDecorator) {
//     return function 
//     <T extends { new(...args: any[]): object }>
//     (constructor: T) {
//         return class extends constructor {
//             constructor(...args: any[]){
//                 super(...args);
                
//                 const el = document.querySelector(config.selector)!;
//                 el.innerHTML = config.template;
//             }
//         }
//     }
// }

// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return original.bind(this)
//         }
//     }
// }

// @ComponentFun({
//     selector: "#card",
//     template: `
//         <div class="card">
//             <div class="card-content">
//                 <h1>Card №1</h1>
//             <div> 
//         <div>
//     `
// })

// class Component2 {
//     constructor(public name: string) {}

//     @Bind
//     logName() {
//         console.log(`Component2 name = ${this.name}`);
        
//     }
// }

// const card = new Component2('My card component!');

// const btn2 = document.querySelector('#btn2')!;
// btn2.addEventListener('click', card.logName)

// ===============
type ValidatorType = 'required' | 'email';

interface validatorConfig {
    [prop: string]: {
        [validatorProm: string]: ValidatorType;        
    }
}

const validators: validatorConfig = {}

function Required (target: any, propName: string) {
    validators[target.construcor.name] = {
        ...validators[target.construcor.name],
        [propName]: 'required'
    }
}   

function Validate(obj: any): boolean {
    const objConfig = validators[obj.construcor.name];
    if(!objConfig) {
        return true;
    }
    let isValid = true;

    Object.keys(objConfig).forEach(key => {
        if(objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    });

    return isValid;
}

class Form {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}

const form = new Form();
console.log(form);

if(Validate(form)) {
    console.log("valid = ", form)
}else{
    console.log('valid error'); 
}