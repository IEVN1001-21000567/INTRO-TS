import {Area} from "./Area";

class Volumen extends Area{
    private volumenR:number;
    private volumenC:number;
    private volumenCir:number;
    private alturaVol:number;

    constructor(base: number, altura: number, lado: number, radio: number, alturaVol: number){
        super(base,altura,lado,radio);
        this.volumenR=0;
        this.volumenC=0;
        this.volumenCir=0;
        this.alturaVol=alturaVol;
    }

    calcularVolumenPrisma(): number {
        this.volumenR = this.calcularAreaRectangulo() * this.alturaVol;
        return this.volumenR;
    }

    calcularVolumenPiramide(): number {
        this.volumenC = this.calcularAreaCuadrado() * this.alturaVol / 3;
        return this.volumenC;
    }

    calcularVolumenCilindro(): number {
        this.volumenCir = this.calcularAreaCirculo() * this.alturaVol;
        return this.volumenCir;
    }

    calcularTodo(): void {
        console.log(`Área del rectángulo: ${this.calcularAreaRectangulo()}`);
        console.log(`Área del cuadrado: ${this.calcularAreaCuadrado()}`);
        console.log(`Área del círculo: ${this.calcularAreaCirculo()}`);
        console.log(`Volumen del Prisma: ${this.calcularVolumenPrisma()}`);
        console.log(`Volumen del Piramide: ${this.calcularVolumenPiramide()}`);
        console.log(`Volumen del cilindro: ${this.calcularVolumenCilindro()}`);
    }
}

const volumen= new Volumen(10,10,10,10,2);
volumen.calcularTodo();