import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'

export default function Field() {
  return (
    <div className ="field">
        <PlayerFieldZone player="player-field-zone player_2" />
        <PlayerFieldZone player="player-field-zone player_1" />
    </div>
  )
}
