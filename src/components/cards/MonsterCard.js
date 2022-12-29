import React from 'react'
import { useState } from 'react'
import Card from './Card.js'


export default function MonsterCard(props) {

  let [card, setCard] = useState(props.card)
  console.log(card)
  return (
    <div className="card monster-card">
      <Card />
    </div>
  )
}

