console.log('namespame.js');
///<references path="namespaceForm.ts" />

namespace Form2 {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';
    
        constructor(public email: string) {
    
        }
    
        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const myForm = new MyForm('lee@gmail.com');
}


console.log(Form2.myForm);

