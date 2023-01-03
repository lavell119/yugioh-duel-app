import React from 'react'
import { useState } from 'react'


export default function Deck(props) {
  const deck = props.deck
  if(deck) {
  return (
    <div className="card">
    
      <img style={{ height: 120, width: 85}} src="/images/cards/yugioh_back_of_card.webp" />
      
    </div>

  )
}
   return <div className="card"></div>
}