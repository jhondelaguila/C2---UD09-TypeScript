"use strict";
class Lavadora extends Electrodomestico {
    constructor(consumo) {
        super(consumo);
        this.carga = 5;
    }
    getCarga() { return this.carga; }
    ;
    precioFinal() {
        let precio_final = super.precioFinal();
        if (this.getCarga() > 30)
            precio_final += 50;
        return precio_final;
    }
}
