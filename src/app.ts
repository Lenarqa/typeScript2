console.log('app.ts!!!');

class Person{
    constructor(private name: string){}
}

const max = new Person('Maxim');

const btn = document.querySelector('#btn');
if(btn){
    btn.addEventListener('click',()=>{
        console.log('btn click');
        
    });
}

let anyType;

function showInfo(data: string): void{
    console.log(data);
    anyType = true;
    console.log(anyType);
    
}

function multiple(a: number, b: number){
    if(a && b){
        return a * b;
    }
    return;
}

showInfo('Hello from show info!');