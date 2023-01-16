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
    let defensePoints = selectedCard.defense_points
    let monsterType = selectedCard.monster_type
    let attribute = selectedCard.attribute
    let level = selectedCard.level



    console.log(attackPoints)

  return (
    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
          <>
            <div className="monster-card-info">
            <div class="white">Attack Points: <b>{attackPoints}</b></div>
            <div class="white">Defense Points: <b>{defensePoints}</b></div>
            <div class="white">Type: <b>{monsterType}</b></div>
            <div class="white">Attribute: <b>{attribute}</b></div>
            <div class="white">Level: <b>{level}</b></div>

            </div>
          </>
            }     
        </div>
    </div>
  )
}

