import React from 'react'
import Card from './Card.js'
import { useState } from 'react'


export default function MonsterCard(props) {
  let cardProp = props.card
  const [card, setCard] = useState(cardProp)
  console.log(card)
  if(card){
  return (
    <div className="card monster-card">
      <Card card="blue_eyes_white_dragon"/>
    </div>
  )
}
return (
  <div className="card monster-card"></div>

)
}


