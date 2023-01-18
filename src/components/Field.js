import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'
import KaibaDeck from './kaiba_deck.json'
import YugiDeck from './yugi_deck.json'
import CardControls from './cards/CardControls'
import FieldCardDisplay from './FieldCardDisplay'

export default function Field() {
  
  
  let randomCard=Math.floor(Math.random()*10)
  console.log(randomCard)
  let hand=[0, 1, 3, 4]
  const swordStalker = {
    name: "Swordstalker",
    card_type: "monster",
    "monster_type": ["Warrior"],
    "attack-points": 2000,
    "defense-points": 1600,
    "level": 6,
    "attribute": "dark",
    "image": "/images/cards/swordstalker.webp"
}

  return (
    <>
    <h2>Yu-Gi-Oh Duel App</h2>
    <div className ="field">
        <h2 class="white">Yu-Gi-Oh Duel App</h2>
        <PlayerFieldZone player="player-field-zone player_2" deck={KaibaDeck} hand = {hand} monsterCards = {swordStalker} />
        <PlayerFieldZone player="player-field-zone player_1" deck= {YugiDeck} />
        <FieldCardDisplay />
    </div>
    </>
  )
}
