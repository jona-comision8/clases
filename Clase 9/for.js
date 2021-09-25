/* let frutas = ["Ananá", "Frutilla", "Manzana", "Naranja", "Uva"];

for(let i = 0; i < frutas.length; i++){
    console.log("Index : " + i + " " + frutas[i])
}
 */
let noParesDeContarVocalesHasta = (numero) => {
    let texto = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, voluptatum aliquid, odio quaerat quis quam impedit voluptatem exercitationem id, culpa magnam quod debitis laudantium sed ipsum corrupti hic! Beatae recusandae molestias iste eos ea! Libero impedit blanditiis vero quasi ducimus eveniet ad consectetur voluptatibus quibusdam laboriosam fugit, inventore iusto illum, nemo ullam explicabo minus! Inventore eligendi animi assumenda quo commodi incidunt, quas itaque aliquam provident fugiat repellat. Recusandae voluptate repellat enim nihil, hic quos, laudantium accusantium mollitia iusto ipsum dignissimos ratione vero. Aut vel dignissimos architecto! Dolorum delectus animi nihil in mollitia recusandae aspernatur ipsa perspiciatis. Delectus reiciendis, praesentium veritatis impedit, nihil blanditiis enim nisi pariatur laudantium repellendus hic. Quisquam rerum qui earum corporis sint ut excepturi quibusdam! Sint sequi nulla maiores. Placeat, error est provident, autem esse et voluptate reprehenderit officia hic ipsam, eos facilis illo velit beatae? Atque corrupti consequatur mollitia reprehenderit cupiditate perspiciatis aut nemo exercitationem voluptatibus aspernatur accusamus fuga natus suscipit rem quis iste sequi, repudiandae, reiciendis dolorum nostrum dicta architecto adipisci illo? Perspiciatis ex accusantium enim culpa impedit non! Delectus quae impedit officiis magni architecto quisquam veniam doloribus adipisci vero laborum possimus nihil saepe quasi incidunt laboriosam, sint ipsum enim iure animi magnam? Ipsa, assumenda?"
    let letras = texto.split("");
    let contador = 0;
    for(let index = 0; contador < numero; index++){
        if(letras[index].toLowerCase() == "a" || letras[index].toLowerCase() == "e" || letras[index].toLowerCase() == "i" || letras[index].toLowerCase() == "o" || letras[index].toLowerCase() == "u"){
            contador++
            console.log(letras[index])
        }
    }
}

noParesDeContarVocalesHasta(20)