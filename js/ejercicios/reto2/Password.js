"use strict";
class Password {
    constructor() {
        this.longitud = 8;
        this.password = this.createPassword();
    }
    createPassword() {
        let password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.longitud; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }
    getPassword() {
        return this.password;
    }
}
