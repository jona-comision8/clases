function puntue(mano){
    let resultado = 0;
     for (let i = 0; i < mano.length; i++) {
         if(mano[i].v == 1){
             mano[i].v = 20; // 20
             console.log(mano[i].v)
         }
         if (mano[i].p === "corazones" || mano[i].p === "diamantes"){
            mano[i].v = mano[i].v * 2 // 40
            console.log(mano[i].v)
         }
            resultado = resultado + mano[i].v
        }
        return resultado;
    }
 let emanuel = [{v:1,p:"corazones"},{v:10,p:"diamantes"},{v:6,p:"picas"},{v:10,p:"trebol"}]
 let francisco = [{v:5,p:"corazones"},{v:1,p:"diamantes"},{v:1,p:"picas"},{v:1,p:"trebol"}]
  function ganador(mano1,mano2){
    let jugador1 = puntue(mano1)
    let jugador2 = puntue(mano2)
      if(jugador1 > jugador2){
          return console.log("El ganador es el jugador 1 con " + jugador1 + " puntos.");
      }else{
          return  console.log("El ganador es el jugador 2 con "+ jugador2 + " puntos.");
      }
  }
  ganador(emanuel,francisco);