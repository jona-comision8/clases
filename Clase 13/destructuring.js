let array = ["Antonio", { 
    nombre : "Mati",
    saludar : () => console.log("Hola, Soy " + nombre),
    materias : []
}, "Sandra"];

var [actor1, actor2, actriz1] = array

let { nombre, saludar } = actor2

saludar()

/* let moduloTareas = require('./tareas');

let { leerJSON : saludar, escribirJSON } = moduloTareas;

saludar() */

