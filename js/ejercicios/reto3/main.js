"use strict";
let elec1 = new Electrodomestico('B');
let elec2 = new Electrodomestico('C');
let elec3 = new Lavadora('A');
let elec4 = new Lavadora('D');
let elec5 = new Electrodomestico('F');
let elec6 = new Electrodomestico('E');
let elec7 = new Electrodomestico('G');
let elec8 = new Television('B');
let elec9 = new Television('A');
let elec10 = new Television('c');
let electro = [elec1, elec2, elec3, elec4, elec5, elec6, elec7, elec8, elec9, elec10];
for (const elec of electro) {
    console.log(elec.precioFinal());
}
