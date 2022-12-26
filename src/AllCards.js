import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './components/deck.json'


export default function AllCards() {
  console.log(Cards)
  

  return (
    <div className="all-cards">
        {Cards.map(card =>
          <div className="card-test">
            <div class="card-title">{card.name}</div>
            <img style={{ height: "150px", width: "100px" }}src={card.image} alt="" /> 
          </div>
        )
        }
     
    </div>
  )
}
