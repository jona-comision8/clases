let semaforo = "AmarILLO"
/* 
if(semaforo !== undefined){
    if(semaforo.toLowerCase() === "verde"){
        console.log("Avance");
    }else if(semaforo.toLowerCase() == "amarillo"){
        console.log("Avance con precaución")
    }else if(semaforo.toLowerCase() == "rojo"){
        console.log("Stop")
    }else{
        console.log("Ese color....")
    }
}else{
    console.log("Ingresa un valor")
}
 */
switch (semaforo.toLowerCase()) {
    case "verde":
        console.log("Avance")
        break;
    case "amarillo":
        console.log("Avance con precaución")
        break;
    case "rojo":
        console.log("Stop")
        break;
    default:
        console.log("Ese no es un color en  nuestro semáforo")        
}

let nombre = "maria"

console.log(nombre[0].toUpperCase())

if(nombre !== undefined){
    switch (nombre.toLowerCase()){
        case "José": 
        case "Manuel": 
        case "Maria":
            console.log("Bienvenidxs")
            break
        default:
            console.log("No puedes ingresar")    
    }
}else{
    console.log("Ingresa tu nombre")
}
