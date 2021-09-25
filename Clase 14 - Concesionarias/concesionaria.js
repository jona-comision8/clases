let autos = require('./autos');

let concesionaria = {
    buscarAuto: (patente) => {
        let autoEncontrado = autos.find(auto => auto.patente == patente)
        return autoEncontrado ? autoEncontrado : null
    }
}

console.log(concesionaria.buscarAuto("APL124"))