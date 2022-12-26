import React from 'react'
import { useState } from 'react'

export default function MonsterCard(props) {

  let [card, setCard] = useState(props.card)
  console.log(card)
  return (
    <div className="card monster-card" style={{ 
      backgroundImage: card, backgroundSize: "contain"
    }}>
    </div>
  )
}

