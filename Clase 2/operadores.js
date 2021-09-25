// OPERADORES

// De asignación

var variable = "Valor";
let array = ["2", 2];

/* Aritméticos */

//SUMA 
console.log(25 + 2);
//Resta
console.log(25 - 2);
//Multiplicación
console.log(25 * 2);
//División
console.log(25 / 2);
//Incremento
let numero = 25
console.log(++numero);
//Decremento
console.log(--numero);
//Módulo
console.log(15%3) // 15 / 3 
console.log(15%4)
console.log(7%2) // 1
console.log(4%2) // 0

/* Comparación simple */
//Igualdad
console.log(10 == "10");
//Desigualdad
console.log(10 != 10);

/* Comparación estricta */
console.log(10 === Number("10"));
console.log(10 !== "10");

/* Operadores realacionales */

console.log(15 > 10)
console.log(15 >= 10)
console.log(15 < 10)
console.log(15 <= 10)

/* LOGICOS */

// && (AND)  
console.log((10 > 9) && (10 !== 20))

// || (OR) 
console.log((10 > 15) || (10 !== 10))

// ! (NOT) 
console.log(!(10 > 15) || (10 !== 10))

let color = "Rojo";
let noEsRojo = !(color == "Rojo");

console.log(noEsRojo);
