type typeSexo = 'H' | 'M';
const defSexo = 'H'

class Persona {
    private nombre:string;
    private edad:number;
    private DNI:string;
    private sexo:typeSexo;
    private peso:number;
    private altura:number;
    
    constructor(DNI:string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = DNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
 }
