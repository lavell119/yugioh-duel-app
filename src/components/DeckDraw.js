import React from 'react'
import KaibaDeck from './kaiba_deck.json'
import { useEffect } from 'react'


let numberOfCards = 50
let drawCard = function(){
    let e = Math.floor(Math.random() * numberOfCards)
    let drawnCard=(KaibaDeck[e])
    console.log(drawnCard)
    numberOfCards=numberOfCards-1
    KaibaDeck.splice(e, 1)
    console.log(KaibaDeck)
}

export default function DeckDraw() {

    
  return (
    <button onClick={drawCard}>Draw Card</button>
  )
}
