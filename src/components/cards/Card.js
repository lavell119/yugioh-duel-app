import React from 'react'
import { useState } from 'react'
import $ from 'jquery'
import CardControls from './CardControls.js'

export default function Card(props) {



  const activeCard = props.card
  const [card, setCard] = useState(activeCard)
  const [hover, setHover] = useState(false)

  function mouseOver(e){
    setHover(true)
    console.log('hovering')
  }
  if (card){
  return (
    <>
    <img class="card" draggable="true" onDrag={()=>{console.log('920019s')}} style={{ height: 120, width: 85}} src={card.image}
     />
         {hover===true && <CardControls />}

    </>
  )
}
}



