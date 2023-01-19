import React from 'react'
import Card from './cards/Card.js'
import KaibaDeck from './kaiba_deck.json'
import { useState } from 'react'

export default function Hand(props) {
  let [handState, setHandState] = useState([])
  let numberOfCards = 50
  let hand =[]

  //Draw card function
  let drawHand = ()=>{
    let e = Math.floor(Math.random() * numberOfCards)
    let drawnCard=(KaibaDeck[e])
    console.log(drawnCard)
    numberOfCards=numberOfCards-1
    hand.push(drawnCard)
    setHandState([...handState, drawnCard])
    console.log(handState)
    KaibaDeck.splice(e, 1)
    console.log(KaibaDeck)
    console.log(hand)
}
  console.log(props)
  let handCards = props.handCards
  console.log('handcards =' +{handCards})
  
  return (
    <div className="hand opacity">
          <button onClick={drawHand}>Draw</button>
          {/* {handCards.map(card => <div className="card white"><img style={{height: 120}} src={card.image} /></div>)} */}
          {handState.map(card => <Card card={card}/>)}

      {/* <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/> */}
    </div>
  )
}


