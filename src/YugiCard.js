import React from 'react'
import YugiDeck from './components/yugi_deck.json'
import { useParams } from 'react-router-dom'

let int = 2

export default function YugiCard() {
    console.log(YugiDeck)
    const { id } = useParams()
    let selectedCard = YugiDeck[id]
    console.log(selectedCard)


    let attackPoints = selectedCard.attack_points
    console.log(attackPoints)

  return (
    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
            <div class="white">Attack Points: {attackPoints}</div>
            }     
        </div>
    </div>
  )
}

