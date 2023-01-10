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


export default function PlayerFieldZone(props) {
  let hando=props.hand
  let deck=props.deck
  let hand 
  // let monsterCards = document.querySelectorAll('.monster-card')
  // console.log(monsterCards)
  let drawHand = () => {
    hand = deck.slice(0,5)
    console.log(hand)

  }

  drawHand()

    console.log(props)
    let playerClass = props.player
    return (
    <div className={playerClass}>
        {/* <Hand handCards={hando}/> */}
        <FieldCard />
        <MonsterCard card= {props.cards} />
        <MonsterCard />
        <MonsterCard />
        <MonsterCard card="sangan"/>
        <MonsterCard />
        <Graveyard />
        <ExtraDeck />
        <SpellTrapCard card="llal"/>
        <SpellTrapCard />
        <SpellTrapCard />
        <SpellTrapCard />
        <SpellTrapCard />
        <Deck deck={KaibaDeck}/>      
    </div>
  )
}
