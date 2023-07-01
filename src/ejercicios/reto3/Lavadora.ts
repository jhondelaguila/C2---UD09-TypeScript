class Lavadora extends Electrodomestico {
    carga:number;
    
    constructor(consumo:string){
        super(consumo);
        this.carga = 5;
    }

    getCarga():number {return this.carga};

    precioFinal(): number {
        let precio_final = super.precioFinal();
        if(this.getCarga() > 30) precio_final += 50;
        return precio_final;
    }
}

