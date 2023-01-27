import React from 'react'
import FieldCard from './cards/FieldCard.js'
import MonsterCard from './cards/MonsterCard.js'
import Graveyard from './cards/Graveyard.js'
import ExtraDeck from './cards/ExtraDeck.js'
import SpellTrapCard from './cards/SpellTrapCard.js'
import Deck from './cards/Deck.js'
import KaibaDeck from './kaiba_deck.json'
import FiendDeck from './fiend_deck.json'
import Hand from './Hand.js'
import { useState, useEffect } from 'react'
import LifePoints from './LifePoints.js'
import { useSelector, useDispatch } from 'react-redux'
import { dispatch } from 'react'


export default function PlayerFieldZone(props) {
  const dispatch = useDispatch()
  const phaseTester = useSelector(state=>state.phaseIndex)
  const phaseTester2 = useSelector(state=>state.gamestate.phase)

  console.log('phaseTester:' + phaseTester)
  
  const [phase, setPhase] = useState('battle')
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
        <div className="phase_tester white">
          {'state.phaseIndex =' +phaseTester}
          <br />
          {'state.gamestate.phase =' +phaseTester2}
          <button onClick={()=>dispatch({ type: "INCREMENT_PHASE"})} >Increment Phase</button>
          <button onClick={()=>dispatch({ type: "INCREMENT_PHASE_2"})} >Increment Phase</button>
        </div>
        { phase==="draw" && <div class="phase-test white">Draw Phase</div>}
        { phase==="standby" && <div class="phase-test white">Standby Phase</div>}
        { phase==="main" && <div class="phase-test white">Main Phase 1</div>}
        { phase==="battle" && <div class="phase-test white">Battle Phase</div>}
        { phase==="main_2" && <div class="phase-test white">Main Phase Phase 2</div>}
        { phase==="end" && <div class="phase-test white">End Phase</div>}
        <LifePoints />
        <Hand handCards={hand}/>
        <FieldCard />
        <MonsterCard card= "1" />
        <MonsterCard card="2"/>
        <MonsterCard card="3"/>
        <MonsterCard card="4"/>
        <MonsterCard card="5"/>
        <Graveyard card=''/>
        <ExtraDeck card=''/>
        <SpellTrapCard card='1'/>
        <SpellTrapCard card='2'/>
        <SpellTrapCard card='3'/>
        <SpellTrapCard card='4'/>
        <SpellTrapCard card='5'/>
        <Deck deck={FiendDeck}/>      
    </div>
  )
}
