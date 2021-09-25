

let alumnxs = [
    {
        nombre: "Jonatan",
        apellido: "Céspedes",
        materias: [
            {
                nombre: "Sociales",
                estado: "Aprobado"
            },
            {
                nombre: "Naturales",
                estado: "Aprobado"
            },
            {
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },
            {
                nombre: "Inglés",
                estado: "Aprobado"
            },
            {
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "Matias",
        apellido: "López",
        materias: [
            {
                nombre: "Sociales",
                estado: "Aprobado"
            },
            {
                nombre: "Naturales",
                estado: "Aprobado"
            },
            {
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },
            {
                nombre: "Inglés",
                estado: "Aprobado"
            },
            {
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "Yésica",
        apellido: "Do Campo",
        materias: [
            {
                nombre: "Sociales",
                estado: "Aprobado"
            },
            {
                nombre: "Naturales",
                estado: "Aprobado"
            },
            {
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },
            {
                nombre: "Inglés",
                estado: "Aprobado"
            },
            {
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "David",
        apellido: "Mora",
        materias: [
            {
                nombre: "Sociales",
                estado: "Aprobado"
            },
            {
                nombre: "Naturales",
                estado: "Aprobado"
            },
            {
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },
            {
                nombre: "Inglés",
                estado: "Aprobado"
            },
            {
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "Mariela",
        apellido: "Paduani",
        materias: [
            {
                nombre: "Sociales",
                estado: "Aprobado"
            },
            {
                nombre: "Naturales",
                estado: "Aprobado"
            },
            {
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },
            {
                nombre: "Inglés",
                estado: "Aprobado"
            },
            {
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
]

/* for(let i = 0; i < alumnxs.length ; i++){
    console.log("***************")
    console.log(alumnxs[i].nombre)
    console.log("***************")
    for(let index = 0 ; index < alumnxs[i].materias.length; index++){
        console.log("Materia: " + alumnxs[i].materias[index].nombre + " - Estado: " + alumnxs[i].materias[index].estado)
    }

} */

// MÉTODOS DE ARRAY 2

// .map()

let probandoMap = alumnxs.map(alumnx => alumnx = "Cosme" )
console.log(probandoMap)

let numeros = [1, 5, 8];

let triple = numeros.map(numero => numero * 3)
console.log(triple)

var str = 'Neuquen';
console.log([].map.call(str, function(x) {
  return x;
}).reverse().join('')
)

// .filter()

let materias = [
    {
        nombre: "Sociales",
        estado: "Aprobado"
    },
    {
        nombre: "Naturales",
        estado: "Aprobado"
    },{
        nombre: "Matemáticas",
        estado: "Desaprobado"
    },{
        nombre: "Inglés",
        estado: "Aprobado"
    },{
        nombre: "Lengua",
        estado: "Desaprobado"
    },
]

let filtro = "Aprobado"

let materiasFiltradasConFor = [] 
for(let i = 0; i < materias.length; i++ ){
    if(materias[i].estado === filtro){
        materiasFiltradasConFor.push(materias[i])
    }
}

//console.log(materiasFiltradasConFor)

let materiasFiltradas = materias.filter(materia => materia.estado === filtro)
//console.log(materiasFiltradas)

// .reduce() 

let valores = [100, 150, 155, 800, 10000];

// Acumulador = 0
// vuelta 1 = 0 + 100 = acumulador = 100
// vuelta 2 = 100 + 150 = acumulador = 250
let sumaDeValores = valores.reduce((acumulador, numero)=>{
    return acumulador + numero
})

//console.log(sumaDeValores)

let edades = [22, 52, 23, 48, 48, 25, 28, 18, 35, 33, 40]
let cantidadDeUsuarios = edades.length
let promedioDeEdad = edades.reduce((acum, edad) => {
    return acum + edad
})

let promedio = promedioDeEdad / cantidadDeUsuarios

console.log(promedio)

// .forEach 


/* for(let i = 0; i < alumnxs.length ; i++){
    console.log("***************")
    console.log(alumnxs[i].nombre)
    console.log("***************")
    for(let index = 0 ; index < alumnxs[i].materias.length; index++){
        console.log("Materia: " + alumnxs[i].materias[index].nombre + " - Estado: " + alumnxs[i].materias[index].estado)
    }

} */

alumnxs.forEach(item => {
    console.log("***************")
    console.log(item.nombre)
    console.log("***************")
    item.materias.forEach(materia => {
        console.log("Materia: " + materia.nombre + " - Estado: " + materia.estado)
    })
})





