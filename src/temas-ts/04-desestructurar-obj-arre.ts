interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
 interface Detalles{
    autor:string;
    year:number;
 }

 const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion: 'La vida es un sueño',
    detalles:{
        autor:"Fernando rojas",
        year:1500
    }
 }

 /*console.log(`El cvolumen actual es: ${reproductor.volumen}`)
 console.log(`Los segundos son: ${reproductor.segundo}`)
 console.log(`La cancion es: ${reproductor.detalles.cancion}`)
 console.log(`El cantante es es: ${reproductor.detalles.autor}`)
 console.log(`El año es: ${reproductor.detalles.year    }`)*/

 const{volumen, segundo, cancion, detalles}=reproductor;
 const{autor, year}=detalles;
 console.log(`El cvolumen actual es: ${volumen}`)
 console.log(`Los segundos son: ${segundo}`)
 console.log(`La cancion es: ${cancion}`)
 console.log(`El cantante es es: ${autor}`)
 console.log(`El año es: ${year}`)

 const dbz:string[]=['Guku', 'Majinbu', 'Babidy','Freezer']
console.log(`Personaje 1:${dbz[0]}`)
console.log(`Personaje 2:${dbz[1]}`)
console.log(`Personaje 3:${dbz[2]}`)
console.log(`Personaje 4:${dbz[3]}`)

const[a,b,c]=dbz;
console.log(`Personaje 1:${a}`)
console.log(`Personaje 2:${b}`)
console.log(`Personaje 3:${c}`) 

