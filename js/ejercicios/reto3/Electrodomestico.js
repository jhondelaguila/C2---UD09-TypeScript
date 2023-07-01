"use strict";
const defColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;
class Electrodomestico {
    constructor(consumo) {
        this.tipos_colores = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        this.tipos_consumo = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.precios_consumo = [100, 80, 60, 50, 30, 10];
        this.precio_base = defPrecio;
        this.color = defColor;
        this.peso = defPeso;
        this.consumo = defConsumo;
        this.comprobarColor(this.color.toLowerCase());
        this.comprobarConsumoEnegetico(consumo.toUpperCase());
        this.precioFinal();
    }
    getPrecioBase() { return this.precio_base; }
    ;
    getColor() { return this.color; }
    ;
    getConsumo() { return this.consumo; }
    ;
    getPeso() { return this.peso; }
    ;
    comprobarConsumoEnegetico(letra) {
        if (!this.tipos_consumo.includes(letra))
            this.consumo = 'F';
        else
            this.consumo = letra;
    }
    comprobarColor(color) {
        if (!this.tipos_colores.includes(color))
            this.consumo = 'blanco';
        else
            this.color = color;
    }
    precioFinal() {
        let precio_final = this.precio_base;
        let cons = this.getConsumo();
        let index = this.tipos_consumo.indexOf(cons);
        precio_final += this.precios_consumo[index];
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
