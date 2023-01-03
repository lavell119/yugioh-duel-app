import React from 'react'
import Card from './cards/Card.js'

export default function Hand(props) {
  console.log(props)
  let handCards = props.handCards
  return (
    <div class="hand">
      {handCards.map(card => 
          <Card />

      )}
       
    </div>
  )
}
