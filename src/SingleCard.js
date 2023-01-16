import React from 'react'
import { useParams } from 'react-router-dom'
import KaibaDeck from './components/kaiba_deck.json'
import YugiDeck from './components/yugi_deck.json'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export default function SingleCard(props) {
    const [cardDeck, setCardDeck] =  useState([])
    // if(props.deck === "kaiba"){
    //     setCardDeck(KaibaDeck)
    //     console.log(cardDeck)
    // } 

    // if(props.deck === "yugi"){
    //     setCardDeck(YugiDeck)
    //     console.log(cardDeck)
    // }
    function setDeck (){
    if(props.deck === "kaiba"){
         setCardDeck([KaibaDeck])
         console.log('lllllll')
         console.log(cardDeck)


    } 
    if(props.deck === "yugi"){
      setCardDeck([YugiDeck])
      console.log('mmmmm')
      console.log(cardDeck[8])
 } 

    //  else if(props.deck === "yugi"){
    //       setCardDeck(YugiDeck)
    //       console.log(cardDeck)
    // } else return
    }
    useEffect(()=>setDeck(),[])
    const { id } = useParams()
    console.log(id)
    let cardo = YugiDeck[4]

    console.log(cardDeck)
    console.log(cardDeck)


    console.log(YugiDeck)

    if(cardDeck)
  return (
    <div style={{color:"white", height: 300, width: 300, background: "red"}}>
      <h2></h2>
    </div>
  )
}
