"use strict";
class Electrodomestico {
    constructor(precio_base, color, consumo, peso) {
        this.precio_base = 100;
        this.color = 'blanco';
        this.consumo = 'F';
        this.peso = 5;
        this.tipos_colores = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        this.tipos_consumo = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.precios_consumo = [100, 80, 60, 50, 30, 10];
        this.precio_base = precio_base;
        this.comprobarColor(color);
        this.comprobarConsumoEnegetico(consumo);
        this.peso = peso;
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
        if (!this.tipos_colores.includes(color.toLocaleLowerCase()))
            this.consumo = 'blanco';
        else
            this.color = color.toLocaleLowerCase();
    }
    precioFinal() {
        let cons = this.getConsumo();
        let index = this.tipos_consumo.indexOf(cons);
        this.precio_base += this.precios_consumo[index];
        if (this.peso >= 0 && this.peso < 20)
            this.precio_base += 10;
        else if (this.peso >= 20 && this.peso < 49)
            this.precio_base += 50;
        else if (this.peso >= 50 && this.peso < 79)
            this.precio_base += 80;
        else if (this.peso > 80)
            this.precio_base += 100;
    }
}
let electro = new Electrodomestico(200, 'verde', 'G', 50);
console.log(electro);
console.log(electro.precio_base);
