"use strict";
const defColor = "blanco";
const defPrecio = 100;
const defPeso = 5;
class Electrodomestico {
    constructor(consumo) {
        this.precio_base = defPrecio;
        this.color = defColor;
        this.peso = defPeso;
        this.consumo = consumo;
        this.comprobarColor(this.color.toLowerCase());
        this.comprobarConsumoEnegetico(consumo.toUpperCase());
        this.precioFinal();
    }
    getPrecioBase() {
        return this.precio_base;
    }
    getColor() {
        return this.color;
    }
    getConsumo() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnegetico(letra) {
        const encontrado = Electrodomestico.tipos_consumo.find((consumo) => consumo === letra);
        this.consumo = encontrado ? letra : "F";
    }
    comprobarColor(color) {
        const encontrado = Electrodomestico.tipos_colores.find((col) => col === color);
        this.color = encontrado ? color : "blanco";
    }
    precioFinal() {
        let precio_final = this.precio_base;
        let cons = this.getConsumo();
        let index = Electrodomestico.tipos_consumo.indexOf(cons);
        precio_final += Electrodomestico.precios_consumo[index];
        if (this.getPeso() >= 0 && this.peso < 20)
            precio_final += 10;
        else if (this.getPeso() >= 20 && this.peso < 49)
            precio_final += 50;
        else if (this.getPeso() >= 50 && this.peso < 79)
            precio_final += 80;
        else if (this.getPeso() > 80)
            precio_final += 100;
        return precio_final;
    }
}
Electrodomestico.tipos_colores = ["blanco", "negro", "rojo", "azul", "gris"];
Electrodomestico.tipos_consumo = ["A", "B", "C", "D", "E", "F"];
Electrodomestico.precios_consumo = [100, 80, 60, 50, 30, 10];
