var nombre = "Luciano"

console.log(nombre[5])

console.log(nombre.length);

// .indexOf()

let frase = "No entiendo nada";

console.log(frase.length);
console.log(frase.indexOf("nada"))
console.log(frase.indexOf("e"))

// .slice()

console.log(frase.slice(3,11))
console.log(frase.slice(3))
console.log(frase.slice(-4))

// .trim()

nombre = "       Mari  ela    " 
console.log(nombre);
console.log(nombre.trim())

// .split()

console.log(frase.split());
console.log(frase.split(' '));
console.log(frase.split(''));

// .replace()

let nuevaFrase = "Aguante Python!";
console.log(nuevaFrase.replace("Py", ""));
