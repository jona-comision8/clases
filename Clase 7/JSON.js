let fs = require('fs'); // requiero el módulo nativo de node (File System)
let arrayJSON = fs.readFileSync('./archivo.json', 'utf-8') 

console.log(arrayJSON);

let arrayParseado = JSON.parse(arrayJSON);

console.log(arrayParseado);

arrayParseado.pop();

let nuevoArray = JSON.stringify(arrayParseado);

fs.writeFileSync('./archivo.json', nuevoArray, 'utf-8');






