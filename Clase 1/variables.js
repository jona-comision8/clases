var apellido = "Serrano"; // Primero, utilizo la palabra reservada var le asigno un nombre y luego un valor

//console.log(apellido);

apellido = "Toledo";

//console.log(apellido);

let apellido2 = "Arroyo"; // Variable Scope Global

if(true){
    let nombre = "Emanuel"; // Variable con Scope Local
    console.log(nombre)
}

//console.log(nombre)

let marca = "Molinos"; // Global

/*if(true) {
   let marca = "Arcor"; // Local
   console.log(marca)
}*/

console.log(marca);

let numeroDNI = 32555555;
numeroDNI = 33555555;
console.log(numeroDNI)

const DNI = 31111111;


function constante (){
    DNI = 21111111;
    console.log(DNI)
}

constante()


