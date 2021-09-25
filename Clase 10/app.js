let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

switch (comando) {
   case "listar":
       let tareas = moduloTareas.leerJSON();
        if(tareas.length === 0){
            console.log("Tu lista de tareas está vacía")
        }else{
           for(let i = 0; i < tareas.length; i++){
                console.log("Título: " + tareas[i].titulo + " - estado: " + tareas[i].estado)
            } 
        }
       break;
   case "agregar":
       let titulo = process.argv[3]; // Titulo que pase por consola
       let estado = process.argv[4]; // Estado pasado por consola 
       moduloTareas.escribirJSON(titulo, estado) 
       break; 
   case "deshacer":
       moduloTareas.deshacer()
        break;  
   case "filtrar":
        let filtrar = process.argv[3]
        let listaFiltrada = moduloTareas.filtrarPorEstado(filtrar);
        for(let i = 0; i < listaFiltrada.length ; i++){
            console.log(listaFiltrada[i].titulo);
        }
        break;       
   case undefined :
       console.log("Atención - Tienes que pasar una acción");
       break;
   default: 
        console.log("No entiendo qué quieres hacer");
} 

