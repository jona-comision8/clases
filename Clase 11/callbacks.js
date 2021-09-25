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

console.log(calcular(2, 2, dividir))

