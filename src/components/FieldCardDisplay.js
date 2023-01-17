import React from 'react'
import { useState } from 'react'

export default function FieldCardDisplay() {
    const [displayCard, setDisplayCard] = useState({
        "name": "Blue Eyes White Dragon",
        "card_type": "monster",
        "monster_type": ["Dragon", "Normal"],
        "attack_points": 3000,
        "defense_points": 2500,
        "level": 8,
        "attribute": "LIGHT",
        "image": "/images/cards/blue_eyes_white_dragon.webp"
    })
  return (
    <div className ="field-card-display">
        <div className ="field-card-display-card white">{displayCard.name}
        <img style={{height: 250}}src={displayCard.image} />
        </div>
    </div>
  )
}
