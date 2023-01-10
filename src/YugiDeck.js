import React from 'react'
import Cards from './components/yugi_deck.json'



export default function YugiDeck() {
  console.log(Cards)
  

  return (
    <>
    <h2>Kaiba Starter Deck</h2>
    <div className="cards-display">
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