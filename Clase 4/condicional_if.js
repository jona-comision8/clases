/* Condicional IF */

let semaforo;

/* if(semaforo !== "Rojo"){ 
    console.log("Avance");
} */

/* if(semaforo !== "Rojo"){ 
    console.log("Avance")
}else{ 
    console.log("Stop")
}
 */


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



