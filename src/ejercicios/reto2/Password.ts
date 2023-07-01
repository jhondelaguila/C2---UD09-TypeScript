class Password {
    longitud:number = 8;
    password:string;
    
    constructor(){
        this.createPassword();
    }

    createPassword():void {
        this.password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.longitud; i++) {
            this.password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }

    getPassword():string {
        return this.password;
    }
}