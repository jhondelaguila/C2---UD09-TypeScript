class Electrodomestico {
    precio_base:number = 100;
    color:string = 'blanco';
    consumo:string = 'F';
    peso:number = 5;
    private tipos_colores = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
    private tipos_consumo = ['A','B','C','D','E','F'];
    private precios_consumo = [100,80,60,50,30,10];

    constructor(precio_base:number,color:string,consumo:string,peso:number){
        this.precio_base = precio_base;
        this.comprobarColor(color);
        this.comprobarConsumoEnegetico(consumo);
        this.peso = peso;
        this.precioFinal()
    }

    getPrecioBase():number {return this.precio_base};
    getColor():string {return this.color};
    getConsumo():string {return this.consumo};
    getPeso():number {return this.peso};

    private comprobarConsumoEnegetico(letra:string):void {
        if(!this.tipos_consumo.includes(letra)) this.consumo = 'F';
        else this.consumo = letra;
    }

    private comprobarColor(color:string):void {
        if(!this.tipos_colores.includes(color.toLocaleLowerCase())) this.consumo = 'blanco';
        else this.color = color.toLocaleLowerCase();
    }

    precioFinal():void{
        let cons:string = this.getConsumo();
        let index:number = this.tipos_consumo.indexOf(cons);
        this.precio_base += this.precios_consumo[index];
        if(this.peso >= 0 && this.peso < 20) this.precio_base += 10;
        else if(this.peso >= 20 && this.peso < 49) this.precio_base += 50;
        else if(this.peso >= 50 && this.peso < 79) this.precio_base += 80;
        else if(this.peso > 80) this.precio_base += 100;
    }
}

let electro = new Electrodomestico(200,'verde','G',50);
console.log(electro);
console.log(electro.precio_base);

