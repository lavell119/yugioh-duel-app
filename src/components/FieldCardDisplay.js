import React from 'react'
import { useState } from 'react'
import {useSelector } from "react-redux"


export default function FieldCardDisplay() {
    let cardState=useSelector(state=>state.displayCard)
    console.log(cardState)
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
        <div className ="field-card-display-card white">{cardState.name}
        <img style={{height: 250}}src={cardState.image} />
        </div>
        <button>Summon</button>
    </div>
  )
}