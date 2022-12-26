import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './deck.json'


export default function AllCards() {
  console.log(Cards)
  

  return (
    <div>
        {Cards.map(card =>
            <div>{card.name}</div>
        )
        }
     
    </div>
  )
}
