import React from 'react'
import { useState } from 'react'
import $ from 'jquery'
import CardControls from './CardControls.js'
import { useDispatch } from "react-redux"
import {useSelector } from "react-redux"

export default function Card(props) {
  let status =props.status
  console.log(props)
  let cardImage
  const activeCard = props.card
  const [cardSet, setCardSet] = useState(true)
  const [card, setCard] = useState(activeCard)
  const [hover, setHover] = useState(false)

  if (card){
  if(status!=='set'){
    cardImage=card.image
  } else {
    cardImage = "/images/cards/yugioh_back_of_card.webp"
  }

}

  
  let dispatch = useDispatch()


  

  function mouseOver(e){
    setHover(true)
    console.log('hovering')
  }
  
  if (card){
  return (
    <>
    {/* creating mouseOver effect */}
    <img className="card" src={cardImage} mouseOver= {mouseOver} onClick={()=>dispatch({ type: "CHANGE_CARD_DISPLAY", payload: card})}
     />
         {hover===true && <CardControls />}

    </>
  )
}


}



