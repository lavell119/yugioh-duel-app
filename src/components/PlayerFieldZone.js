import React from 'react'
import FieldCard from './cards/FieldCard.js'
import MonsterCard from './cards/MonsterCard.js'
import Graveyard from './cards/Graveyard.js'
import ExtraDeck from './cards/ExtraDeck.js'
import SpellTrapCard from './cards/SpellTrapCard.js'
import Deck from './cards/Deck.js'
import KaibaDeck from './kaiba_deck.json'
import Hand from './Hand.js'


export default function PlayerFieldZone(props) {
    console.log(KaibaDeck)
    let playerClass = props.player
    console.log(props)
    return (
    <div className={playerClass}>
        <Hand />
        <FieldCard />
        <MonsterCard card= {props.cards} />
        <MonsterCard />
        <MonsterCard />
        <MonsterCard />
        <MonsterCard />
        <Graveyard />
        <ExtraDeck />
        <SpellTrapCard />
        <SpellTrapCard />
        <SpellTrapCard />
        <SpellTrapCard />
        <SpellTrapCard />
        <Deck deck={KaibaDeck}/>      
    </div>
  )
}
