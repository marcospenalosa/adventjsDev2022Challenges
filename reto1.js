// https://adventjs.dev/es/challenges/2022/1
/*
Este año los elfos han comprado una máquina que envuelve regalos. 
Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. 
Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente 
al string por todos los lados. Por ejemplo:

El papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, 
las esquinas también están cubiertas por el papel de regalo.

Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. 
Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no modifiques (mutes) el array original.

*/

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    const wrapGifts = gifts.map(gift => `*${gift}*`)
    
    const lineWrap = wrapGifts.map(wrapGift => {
        let howManyWrap = ""
        for(let i = 1; i <= (wrapGift.length); i++){
            howManyWrap = howManyWrap + "*"
        }
        return howManyWrap
    })
    
    const GiftsWrapped = (lineWrap, wrapGifts) => {
      const GiftsWrapped = []
      for (let i=0; i < lineWrap.length; i++){
          GiftsWrapped.push(`${lineWrap[i]}\n${wrapGifts[i]}\n${lineWrap[i]}`)
      } 
      return GiftsWrapped
    }
    const giftsReady = GiftsWrapped(lineWrap,wrapGifts)
    return giftsReady
  }


console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */