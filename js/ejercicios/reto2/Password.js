"use strict";
class Password {
    constructor() {
        this.longitud = 8;
        this.createPassword();
    }
    createPassword() {
        this.password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.longitud; i++) {
            this.password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    getPassword() {
        return this.password;
    }
}
let pass1 = new Password();
let pass2 = new Password();
let pass3 = new Password();
console.log(pass1, pass2, pass3);
