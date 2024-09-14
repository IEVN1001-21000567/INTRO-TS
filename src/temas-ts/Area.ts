export class Area{
    protected areaR:number;
    protected areaC:number;
    protected areaCir:number;
    protected base:number;
    protected altura:number;
    protected lado:number;
    protected radio:number;
    
    constructor(base: number, altura: number, lado: number, radio: number){
        this.areaC=0;
        this.areaCir=0;
        this.areaR=0;
        this.base=base;
        this.altura=altura;
        this.lado=lado;
        this.radio=radio;
    }

    calcularAreaRectangulo(): number {
        this.areaR = this.base * this.altura;
        return this.areaR;
    }

    calcularAreaCuadrado(): number {
        this.areaC = this.lado * this.lado;
        return this.areaC;
    }

    calcularAreaCirculo(): number {
        this.areaCir = 3.1416 * this.radio * this.radio;
        return this.areaCir;
    }
}

//const area= new Area(0,0,0,10,10,10,10);
//area.calcularAreas();