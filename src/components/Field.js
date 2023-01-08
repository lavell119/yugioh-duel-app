import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'
import KaibaDeck from './kaiba_deck.json'
import CardControls from './cards/CardControls'

export default function Field() {
  let hand=[0, 1, 3, 4]
  return (
    <>
    <h2>Yu-Gi-Oh Duel App</h2>
    <div className ="field">
        <h2 class="white">Yu-Gi-Oh Duel App</h2>
        <CardControls />
        <PlayerFieldZone player="player-field-zone player_2" deck={KaibaDeck} hand = {hand} />
        <PlayerFieldZone player="player-field-zone player_1" deck= {KaibaDeck} />
    </div>
    </>
  )
}
