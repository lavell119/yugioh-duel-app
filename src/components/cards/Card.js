import React from 'react'
import { useState } from 'react'

export default function Card(props) {
  const [card, setCard] = useState('j')
  if (card){
  return (
    <img style={{ height: 120, width: 85}} src="/images/cards/yugioh_back_of_card.webp" />
  )
}
}
