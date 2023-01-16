import React from 'react'
import Cards from './components/yugi_deck.json'
import { Link } from 'react-router-dom'



export default function YugiDeck() {
  console.log(Cards)
  

  return (
    <>
    <h2>Kaiba Starter Deck</h2>
    <Link to={"/kaibadeck"}>lllll</Link>
    <div className="cards-display">
        {Cards.map(card =>
          <div className="card-test">
          <div class="card-title">{Cards.indexOf(card)}</div>
          <Link to={`/yugideck/${Cards.indexOf(card)}`}>Link</Link>

            <div class="card-title">{card.name}</div>
            <img style={{ height: "150px", width: "100px" }}src={card.image} alt="" /> 
          </div>
        )
        }
     
    </div>
    </>
  )
}