import React from 'react'
import Card from './cards/Card.js'

export default function Hand(props) {
  console.log(props)
  let handCards = props.handCards
  console.log('handcards =' +{handCards})
  return (
    <div className="hand">
          {handCards.map(card => <div className="card white"><img style={{height: 120}} src={card.image} /></div>)}

      {/* <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/> */}
    </div>
  )
}


