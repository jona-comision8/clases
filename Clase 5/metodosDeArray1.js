let frutas = [ "Banana", "Uva", "Frutilla" ];
console.log(frutas)

// .push() Agrega un elemento (que se pasa como parámetro) en la ultima posición.
let nuevaFruta = "Manzana"
frutas.push(nuevaFruta, "Pera")
console.log(frutas)

// .pop() 
let frutaEliminada = frutas.pop() 
console.log(frutas)

//.shift() 
frutas.shift()
console.log(frutas)

// .unshift 
frutas.unshift("Kiwi", "Sandía", "Banana")
console.log(frutas);

// .join()
let separadosPorComa = frutas.join()
console.log(separadosPorComa)
let separadosPorGuion = frutas.join(" - ");
console.log(separadosPorGuion);

// .indexOf()
frutas.push("Sandía")
console.log(frutas);
console.log(frutas.indexOf("Naranja")); // -1
console.log(frutas.indexOf("Sandía")); // 1
console.log(frutas.indexOf("Frutilla")); // 4
console.log(frutas.indexOf("frutilla")); // -1

// .lastIndexOf
console.log(frutas.lastIndexOf("Sandía")); 

// .includes()
console.log(frutas.includes("Manzana")); // true
console.log(frutas.includes("Mandarina")); // 






