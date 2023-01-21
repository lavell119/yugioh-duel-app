import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'
import KaibaDeck from './kaiba_deck.json'
import YugiDeck from './yugi_deck.json'
import CardControls from './cards/CardControls'
import FieldCardDisplay from './FieldCardDisplay'
import OpponentFieldZone from './OpponentFieldZone'
import { useSelector } from 'react-redux'

export default function Field() {
  const gameRunning = useSelector(state=>state.gamestate.game_running)
  console.log(gameRunning)
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
  if(gameRunning){
  return (
    <>
    <div className="field">
        <OpponentFieldZone player="player-field-zone player_2" deck={KaibaDeck} hand = {hand} monsterCards = {swordStalker} />
        <PlayerFieldZone player="player-field-zone player_1" deck= {YugiDeck} />
        <FieldCardDisplay />
    </div>
    </>
  )}
    return (
      <div className="start_game">
        <button id ="start_game_btn">New Game</button>
      </div>
    )
}


