import React from 'react'
import { useState } from 'react'


export default function Deck(props) {
  const deck = props.deck

  return (
    <div className="card">
    
    <img style={{ height: 70, width: 50}} src="/images/cards/yugioh_back_of_card.webp" />
    </div>
  )
}