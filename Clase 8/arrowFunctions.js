function sumar(a, b){return a + b}

let sumarArrow = (a, b) => a + b

let loro1 = (palabra, cantidad) => palabra.repeat(cantidad)
console.log(loro1("Hola ", 5))

let saludo = () => "Hola Comisión 8"

console.log(saludo());

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes()
}

console.log();