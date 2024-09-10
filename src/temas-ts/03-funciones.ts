function suma(){
    let x=2;
    let y=4;
    let d=x+y;
    console.log(d)
}

function resta(a:number, b:number):number{
    return a-b;
}

const res:number=resta(10,3);
console.log(`La resta es ${res}`);

interface Mascotas{
    name:string;
    edad:number;
    raza:string;
    mostrar:()=>void;
}

function calcular(mascotas:Mascotas, x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
}

const nuevaMascota:Mascotas={
    name:"Fido",
    edad:3,
    raza:"Golden",
    mostrar(){
        console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} años`);
    }
}

calcular(nuevaMascota,4)