import React from 'react'
import Card from './Card.js'
import { useState } from 'react'


export default function MonsterCard(props) {
  let cardProp = props.card
  console.log(cardProp)
  const [card, setCard] = useState(props)
  console.log(card)
  if(cardProp){
  return (
    <div className="card monster-card">
      <Card card={cardProp}/>
    </div>
  )
}
return (
  <div className="card monster-card"></div>

)
}


