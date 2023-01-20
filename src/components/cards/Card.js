import React from 'react'
import { useState } from 'react'
import $ from 'jquery'
import CardControls from './CardControls.js'
import { useDispatch } from "react-redux"
import {useSelector } from "react-redux"

export default function Card(props) {
  let status =props.status
  let dispatch = useDispatch()


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
    <img className="card" src={card.image} onClick={()=>dispatch({ type: "CHANGE_CARD_DISPLAY", payload: card})}
     />
         {hover===true && <CardControls />}

    </>
  )
}
}



