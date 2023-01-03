import React from 'react'
import Card from './Card.js'
import { useState } from 'react'


export default function SpellTrapCardk(props) {
  let cardProp = props.card
  const [card, setCard] = useState(cardProp)
  console.log(card)
  if(card){
  return (
    <div className="card spell-trap-card">
      <Card card="llll"/>
    </div>
  )
}
return (
  <div className="card spell-trap-card"></div>

)
}