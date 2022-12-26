import React from 'react'
import PlayerFieldZone from './PlayerFieldZone'

export default function Field() {
  return (
    <div className ="field">
        <PlayerFieldZone player="player-field-zone player_2" cards="url(images/cards/mefist.webp)"/>
        <PlayerFieldZone player="player-field-zone player_1" cards= "url(images/cards/blueeyeswhitedragon.webp)" />
    </div>
  )
}
