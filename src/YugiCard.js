import React from 'react'
import YugiDeck from './components/yugi_deck.json'
import { useParams } from 'react-router-dom'


export default function YugiCard() {
    console.log(YugiDeck)
    const { id } = useParams()
    let selectedCard = YugiDeck[id]
    console.log(selectedCard)



  return (
    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img src={selectedCard.image} />
        <div className="card-info">
            
        </div>
    </div>
  )
}

