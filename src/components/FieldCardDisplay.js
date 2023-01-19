import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector } from "react-redux"
import { dispatch } from 'react'


export default function FieldCardDisplay() {
    let dispatch = useDispatch()
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
        <div className ="field-card-display-card white">
        <div className="card-display-title">
        {cardState.name}
        </div>
          
        <img style={{height: 320}}src={cardState.image} />
        </div>
        <div className="display-button-container">

        {cardState.card_type==="monster" && <><button onClick={()=>dispatch({ type: "SUMMON_CARD", payload: cardState}) }>Summon</button><button>Set</button></>}

        {(cardState.card_type==="magic" || cardState.card_type==="trap" ) && <button onClick={()=>dispatch({ type: "SET_MAGIC_TRAP_CARD", payload: cardState}) }>Set</button>}

        </div>
    </div>
  )
}
