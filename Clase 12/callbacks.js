

/* setTimeout(function(){
    console.log("Hola Comision 8")
}, 3000)
  */

let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

function calcular(n1, n2, callback){
    return callback(n1, n2);
}

console.log(calcular("Hola ", "¿Cómo estás?", sumar))

/* setInterval(function (){
    console.log("Set Interval")
}, 1000) */

function iniciales (nombre, apellido){
    return nombre[0] + apellido[0];
}

function saludar(nombre, apellido, callback){
    return "¡Hola " + callback(nombre, apellido) + "!"
}

console.log(saludar("Homero", "Simpson", iniciales))

Array.filter(element => {

})
