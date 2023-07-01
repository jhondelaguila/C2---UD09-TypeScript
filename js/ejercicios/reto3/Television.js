"use strict";
class Television extends Electrodomestico {
    constructor(consumo) {
        super(consumo);
        this.resolucion = 20;
        this.fourK = false;
    }
    getResolucion() { return this.resolucion; }
    ;
    get4K() { return this.fourK; }
    ;
    precioFinal() {
        let precio_final = super.precioFinal();
        if (this.getResolucion() > 40)
            precio_final *= 1.3;
        if (this.get4K())
            precio_final += 50;
        return precio_final;
    }
}
