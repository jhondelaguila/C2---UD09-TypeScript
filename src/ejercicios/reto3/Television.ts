class Television extends Electrodomestico {
    resolucion:number;
    fourK:boolean;

    constructor(consumo:string){
        super(consumo);
        this.resolucion = 20;
        this.fourK = false;
    }

    getResolucion():number {return this.resolucion};
    get4K():boolean {return this.fourK};

    precioFinal(): number {
        let precio_final = super.precioFinal();
        if(this.getResolucion() > 40) precio_final *= 1.3;
        if(this.get4K()) precio_final += 50;

        return precio_final;
    }
}