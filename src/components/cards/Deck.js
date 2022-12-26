import React from 'react'
import { useState } from 'react'

export default function Deck() {
  const [deck, setDeck] = useState({
    name: "deck",
  })
  if(deck){
    console.log(deck)
  }
  return (
    
    <div className="card deck">
      <p className="white">{deck.name}</p>
    </div>
  )
}