class Password {
    longitud:number = 8;
    password:string;
    
    constructor(){
        this.password = this.createPassword();
    }

    createPassword():string {
        let password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.longitud; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }

    getPassword():string {
        return this.password;
    }
}