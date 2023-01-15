import React from 'react'
import { useParams } from 'react-router-dom'
import KaibaDeck from './components/kaiba_deck.json'
import YugiDeck from './components/kaiba_deck.json'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export default function SingleCard(props) {
    const [cardDeck, setCardDeck] =  useState()
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
         setCardDeck(KaibaDeck)
         console.log(cardDeck)
    } else return

    // if(props.deck === "yugi"){
    //      setCardDeck(YugiDeck)
    //      console.log(cardDeck)
    // } else return
    }

    useEffect(()=>setDeck())
  
    console.log(props)
    const { id } = useParams()
    console.log(id)
  return (
    <div style={{color:"white", height: 300, width: 300, background: "red"}}>wekfnwelkng</div>
  )
}
