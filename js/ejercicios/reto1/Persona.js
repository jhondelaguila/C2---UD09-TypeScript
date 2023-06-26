"use strict";
class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura) {
        this.nombre = '';
        this.edad = 0;
        this.sexo = 'H';
        this.peso = 0;
        this.altura = 0;
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
let pers1 = new Persona('Jhon', 23, '12345678E', 'H', 66, 170);
let pers2 = new Persona('Maria', 32, '12345674E', 'M', 56, 179);
let pers3 = new Persona('Pedro', 23, '12345178E', 'H', 76, 180);
console.log(pers1, pers2, pers3);
