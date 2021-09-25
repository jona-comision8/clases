/* Funciones */

function sumar (n1, n2){
    return n1 + n2;
}

console.log(sumar("Soy ", "developer"))
//console.log(sumar(2, 2))

// Declaradas

function hacerHelado(cantidad){
    return "Chocolate \n".repeat(cantidad)
}
 //console.log(hacerHelado(10))


function consolesLog (){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//consolesLog()

// Funciones expresadas

let hacerSushi = function (cantidad) {
    return "Sushi \n".repeat(cantidad)
}

//console.log(hacerSushi(100))

function saludar(nombre = "Cosme", apellido = "Fulanito"){
    return "Hola " + nombre + " " + apellido;
}
let nombreDeUsuario = "Jorge"

console.log(saludar("Daniel"))

function ejemplo (numero){
    if(numero === "10"){
        console.log("me ejecuté")
    }
}

ejamplo("10")