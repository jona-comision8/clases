let fs = require('fs');


module.exports = moduloTareas = {
    leerJSON : () => {
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
        return JSON.parse(listaDeTareas)
    },
    escribirJSON: (titulo, estado) => { // creo un método que recibe dos parámetros para crear un nuevo objeto y guardarlo en el array de tareas
        let nuevaTarea = { // creo un objeto nuevo (tarea nueva)
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = moduloTareas.leerJSON(); // guardo en la variable lo que retorna leerJSON

        tareasAnteriores.push(nuevaTarea); // agregar el nuevo objeto (la nueva tarea) al final del mi array de tareas
        moduloTareas.guardarJSON(tareasAnteriores) // utilizo el método guardar para guardar en el archivo .json el array con la nueva tarea
    },
    guardarJSON: (arrayDeTareas) => {
        let nuevoJSON = JSON.stringify(arrayDeTareas);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8' )
    },
    deshacer: () => {
        let tareas = moduloTareas.leerJSON();
        tareas.pop();
        moduloTareas.guardarJSON(tareas)
    },
    filtrarPorEstado: (estado) => {
        let listaDeTareas = moduloTareas.leerJSON();
        let tareasFiltradas = listaDeTareas.filter(tarea => {
          return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        return tareasFiltradas
    }
} 

console.log(moduloTareas.filtrarPorEstado("terminado"))
