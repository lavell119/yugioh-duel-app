import React from 'react'
import Cards from './components/kaiba_deck.json'



export default function KaibaDeck() {
  console.log(Cards)
  

  return (
    <>
    <h2>Kaiba Starter Deck</h2>
    <div className="kaiba-deck">
        {Cards.map(card =>
          <div className="card-test">
            <div class="card-title">{card.name}</div>
            <img style={{ height: "150px", width: "100px" }}src={card.image} alt="" /> 
          </div>
        )
        }
     
    </div>
    </>
  )
}