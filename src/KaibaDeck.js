import React from 'react'
import Cards from './components/kaiba_deck.json'
import { Link } from 'react-router-dom'




export default function KaibaDeck() {
  console.log(Cards)
  

  return (
    <>
    <h2>Kaiba Starter Deck</h2>
    <div className="cards-display">
        {Cards.map(card =>
          <div className="card-test">
            <div class="card-title"><Link to={`/kaibadeck/${Cards.indexOf(card)}`}>{card.name}</Link></div>
            <Link to={`/kaibadeck/${Cards.indexOf(card)}`}>
            <img style={{ height: "150px", width: "100px" }}src={card.image} alt="" /> 
            </Link>
          </div>
        )
        }
     
    </div>
    </>
  )
}