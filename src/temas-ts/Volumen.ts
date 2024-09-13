import {Area} from "./Area";

class Volumen extends Area{
    private volumenR:number;
    private volumenC:number;
    private volumenCir:number;
    private alturaVol:number;

    constructor( areaC:number, areaR:number, areaCir:number,base:number, altura:number,lado:number, radio:number,volumenR:number ,volumenC:number, volumenCir:number, alturaVol:number){
        super(areaC,areaCir,areaR,base,altura,lado,radio);
        this.volumenR=volumenR;
        this.volumenC=volumenC;
        this.volumenCir=volumenCir;
        this.alturaVol=alturaVol;
    }

    CalcularVolumen():void{
        this.calcularAreas();
        this.volumenR=this.areaR*this.alturaVol;
        this.volumenC=this.areaC*this.alturaVol/3;
        this.volumenCir=this.areaCir*this.alturaVol;
        console.log(`El volumen de la piramide es: ${this.volumenR} cilindro ${this.volumenCir} primas ${this.volumenC} `);
    }
}

const volumen= new Volumen(0,0,0,10,10,10,10,0,0,0,2);
volumen.CalcularVolumen();