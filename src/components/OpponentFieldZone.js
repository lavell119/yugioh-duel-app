import React from 'react'
import FieldCard from './cards/FieldCard.js'
import MonsterCard from './cards/MonsterCard.js'
import Graveyard from './cards/Graveyard.js'
import ExtraDeck from './cards/ExtraDeck.js'
import SpellTrapCard from './cards/SpellTrapCard.js'
import Deck from './cards/Deck.js'
import KaibaDeck from './kaiba_deck.json'
import Hand from './Hand.js'
import { useEffect } from 'react'


export default function OpponentFieldZone(props) {
  console.log(props)
  let hando=props.hand
  let deck=props.deck
  let hand
  let monsterCards = props.monsterCards
  console.log(monsterCards)
  // let monsterCards = document.querySelectorAll('.monster-card')
  // console.log(monsterCards)
  const shuffledDeck = () => {
    for (let i = 0; i < deck.length; i--) {
      const j = Math.floor(Math.random() * (i+1))
      const temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
      console.log(deck)

    }
    return deck
  }


  // shuffledDeck()

  let drawHand = () => {
    hand = deck.slice(0,5)
    console.log(hand)

  }

  drawHand()

    console.log(props)
    let playerClass = props.player
    return (
    <div className={playerClass}>
        <FieldCard />
        <MonsterCard card= '' />
        <MonsterCard card=""/>
        <MonsterCard card=""/>
        <MonsterCard card=""/>
        <MonsterCard card=""/>
        <Graveyard card=''/>
        <ExtraDeck card=''/>
        <SpellTrapCard card=''/>
        <SpellTrapCard card=''/>
        <SpellTrapCard card=''/>
        <SpellTrapCard card=''/>
        <SpellTrapCard card=''/>
        <Deck deck={KaibaDeck}/>      
    </div>
  )
}
