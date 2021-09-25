let clubesUno = [ "Boca", "River", "Racing" ];
let clubesDos = [ "San Lorenzo", "Lanús", "Gimnasia" ];
console.log(clubesUno)
console.log(clubesDos)
let todosLosClubes = [...clubesUno, ...clubesDos ]
console.log(todosLosClubes)
let nuevosClubes = ["Defensa", "Mandiyu", ...todosLosClubes]
console.log(nuevosClubes)

let auto = {
    marca: "Ferrari",
    kms : 0,
    anio : 2019
}

let corredorUno = {
    nombre : "Martin",
    edad : 17,
    ...auto
}

console.log(corredorUno)

let notas = [9.3, 8.5,7.3, 7, 10]
console.log(Math.min(...notas))

// Rest Parameter
function miFunction(param1, param2, ...otros){
    return otros;
}

console.log(miFunction(1, 2, 3, 4, 5, 6, 10, 125))

function sumar(...numeros){
    return numeros.reduce((acum, num) => acum += num);
}

console.log(sumar(2, 2, 1254, 1896, 25))
