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
            },{
                nombre: "Matemáticas",
                estado: "Desaprobado"
            },{
                nombre: "Inglés",
                estado: "Aprobado"
            },{
                nombre: "Lengua",
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "María",
        apellido: "Cordoba",
        materias: [
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
                estado: "Aprobado"
            },
        ]
    },
    {
        nombre: "Luis",
        apellido: "Muñoz",
        materias: [
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
                estado: "Aprobado"
            },
        ]
    },
]


alumnxs.forEach(element => {
    console.log("****************")
    console.log("Nombre:  " + element.nombre)
    console.log("****************")
    let elementoAprobado = element.materias.filter(materia => {
        return materia.estado === "Desaprobado"
    })
    console.log("Materias desaprobadas")
    console.log("****************")
    elementoAprobado.forEach(item => {
        console.log(item.nombre)
    })
})
