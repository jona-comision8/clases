let miFecha = new Date();

console.log(miFecha)

let dia = miFecha.getDate()

console.log(dia)

let mes = miFecha.getMonth() + 1

console.log(mes)

console.log(miFecha.getDay())
console.log(miFecha.getFullYear())
console.log(miFecha.toLocaleTimeString())

let reloj = setInterval(()=>{
    let hora = new Date()
    console.log(hora.toLocaleTimeString())
}, 1000)

setTimeout(()=> {
    clearInterval(reloj)
    console.log("Booom")
}, 10000)

let cumple = new Date(1985, 10, 06)
console.log(cumple.getFullYear())

