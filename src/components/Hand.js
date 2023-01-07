import React from 'react'
import Card from './cards/Card.js'

export default function Hand(props) {
  console.log(props)
  let handCards = props.handCards
  return (
    <div class="hand">
      <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/>
      <Card card="blue_eyes_white_dragon"/>
    </div>
  )
}


