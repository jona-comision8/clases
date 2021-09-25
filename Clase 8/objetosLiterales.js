let auto = {
    marca : "Ford",
    modelo : "Taunus",
    anio : 1980,
    funciona : false,
    tocarBocina : function(){
        return "Tu tuuuu"
    }
}

console.log(auto);
console.log(auto.modelo);
console.log(auto.tocarBocina());
//console.log(console)
console.error("Error")

let musico = {
    nombre : "Charly",
    apellido : "García",
    frase : "Say no more",
    saludar : function(){
        return "¡Hola! Soy " + this.nombre + " y mi frase es " + this.frase
    }
}

console.log(musico.saludar());

function Musico(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.nacionalidad = "Argentino"
    this.saludar = function(){
        return "¡Hola! Soy " + this.nombre
    }
}

console.log(new Musico("Luis", "Spinetta"))

let musico2 = new Musico("Gustavo", "Cerati");

console.log(musico2)