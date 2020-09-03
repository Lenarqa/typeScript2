"use strict";
console.log('namespame.js');
///<references path="namespaceForm.ts" />
var Form2;
(function (Form2) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form2.myForm = new MyForm('lee@gmail.com');
})(Form2 || (Form2 = {}));
console.log(Form2.myForm);
