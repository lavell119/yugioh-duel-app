import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'
import KaibaDeck from './kaiba_deck.json'

export default function Field() {
  return (
    <div className ="field">
        <PlayerFieldZone player="player-field-zone player_2" deck={KaibaDeck}/>
        <PlayerFieldZone player="player-field-zone player_1" deck= {KaibaDeck} />
    </div>
  )
}
