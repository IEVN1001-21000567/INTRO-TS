export class Area{
    protected areaR:number;
    protected areaC:number;
    protected areaCir:number;
    protected base:number;
    protected altura:number;
    protected lado:number;
    protected radio:number;
    
    constructor(areaC:number, areaR:number, areaCir:number,base:number, altura:number,lado:number, radio:number){
        this.areaC=areaC;
        this.areaCir=areaCir;
        this.areaR=areaR;
        this.base=base;
        this.altura=altura;
        this.lado=lado;
        this.radio=radio;
    }

    calcularAreas(){
        this.areaCir=3.1416*this.radio*this.radio;
        this.areaC=this.lado*this.lado;
        this.areaR=this.base*this.altura;
      console.log(`La area del circulo es: ${this.areaCir}, la area del cuadrado es: ${this.areaC}, la area del rectangulo es: ${this.areaR}`);
    }
}

//const area= new Area(0,0,0,10,10,10,10);
//area.calcularAreas();