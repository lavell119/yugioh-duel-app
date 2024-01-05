import React from 'react'
import Cards from './components/lob_booster.json'
import { Link } from 'react-router-dom'




export default function LobBooster() {
  console.log(Cards)
  

  return (
    <>
    <h2 class="white">Legend of Blue Eyes White Dragon</h2>
    <div className="cards-display">
        {Cards.map(card =>
          <div className="card-test">
            <div class="card-title"><Link to={`/lobcard/${Cards.indexOf(card)}`}>{card.name}</Link></div>
            <Link to={`/lobcard/${Cards.indexOf(card)}`}>
            <img style={{ height: "150px", width: "100px" }}src={card.image} alt="" /> 
            </Link>
          </div>
        )
        }
     
    </div>
    </>
  )
}