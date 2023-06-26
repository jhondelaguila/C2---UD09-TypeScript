class Persona {
    nombre:string = '';
    edad:number = 0;
    DNI:string;
    sexo:string = 'H';
    peso:number = 0;
    altura:number = 0;
    
    constructor(nombre:string, edad:number, DNI:string, sexo:string, peso:number, altura:number){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
 }

let pers1 = new Persona('Jhon',23,'12345678E','H',66,170);
let pers2 = new Persona('Maria',32,'12345674E','M',56,179);
let pers3 = new Persona('Pedro',23,'12345178E','H',76,180);

console.log(pers1,pers2,pers3);
