import React from 'react'
import KaibaDeck from './components/kaiba_deck.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

let int = 2

export default function KaibaCard() {
    console.log(KaibaDeck)
    const { id } = useParams()
    let selectedCard = KaibaDeck[id]
    console.log(selectedCard)


    let attackPoints = selectedCard.attack_points
    let defensePoints = selectedCard.defense_points
    let monsterType = selectedCard.monster_type
    let attribute = selectedCard.attribute
    let level = selectedCard.level



    console.log(attackPoints)

  return (
    <>
    <Link to="/yugideck"><h4 class="white">Back</h4></Link>

    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
          <>
            <div className="monster-card-info">
            <div class="attribute"><b>Attack Points:</b>{attackPoints}</div>
            <div class="attribute"><b>Type:</b> {monsterType.toString()}</div>
            <div class="attribute"><b>Defense Points:</b>{defensePoints}</div>

            <div class="attribute"><b>Attribute:</b> {attribute}</div>
            <div class="attribute"><b>Level:</b> {level}</div>

            </div>
          </>
            }     
        </div>
    </div>
    </>
  )
}

