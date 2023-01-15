import React from 'react'
import { useParams } from 'react-router-dom'
import KaibaDeck from './components/kaiba_deck.json'
import YugiDeck from './components/kaiba_deck.json'
import { useState } from 'react'

export default function SingleCard(props) {
    const [cardDeck, setCardDeck] =  useState('')
    if(props.deck === "kaiba"){
        setCardDeck(KaibaDeck)
        console.log(cardDeck)
    } 

    if(props.deck === "yugi"){
        setCardDeck(YugiDeck)
        console.log(cardDeck)
    }

  
    console.log(props)
    const { id } = useParams()
    console.log(id)
  return (
    <div>SingleCard</div>
  )
}
