import React from 'react'

export default function SingleCardSnippet(props) {
    const selectedCard = props.card
    let attackPoints = selectedCard.attack_points
    let defensePoints = selectedCard.defense_points
    let monsterType = selectedCard.monster_type
    let attribute = selectedCard.attribute
    let level = selectedCard.level
  return (
    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img class="single-card-img" src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
          <>
            <div className="monster-card-info">
            <div class="attribute">Attack Points:<b>{attackPoints}</b></div>
            <div class="attribute">Type: <b>{monsterType.join( "/ ")}</b></div>
            <div class="attribute">Defense Points:<b>{defensePoints}</b></div>

            <div class="attribute">Attribute: <b>{attribute}</b></div>
            <div class="attribute">Level:<b>{level}</b></div>

            </div>
          </>
            }     
        </div>
    </div>
  )
}
