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
        <img src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
          <>
            <div className="monster-card-info">
            <div class="attribute"><b>Attack Points:</b>{attackPoints}</div>
            <div class="attribute"><b>Type:</b> {monsterType.join( "/ ")}</div>
            <div class="attribute"><b>Defense Points:</b>{defensePoints}</div>

            <div class="attribute"><b>Attribute:</b> {attribute}</div>
            <div class="attribute"><b>Level:</b> {level}</div>

            </div>
          </>
            }     
        </div>
    </div>
  )
}
