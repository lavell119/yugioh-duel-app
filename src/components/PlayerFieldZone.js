import React from 'react'
import FieldCard from './cards/FieldCard.js'
import MonsterCard from './cards/MonsterCard.js'
import Graveyard from './cards/Graveyard.js'
import ExtraDeck from './cards/ExtraDeck.js'
import SpellTrapCard from './cards/SpellTrapCard.js'
import Deck from './cards/Deck.js'

export default function PlayerFieldZone(props) {
    let playerClass = props.player
  return (
    <div className={playerClass}>
        <FieldCard />
        <MonsterCard />
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
        <Deck />      
    </div>
  )
}
