import React from 'react'
import FiendDeck from './components/fiend_deck.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

let int = 2

export default function FiendCard() {
    console.log(FiendDeck)
    const { id } = useParams()
    let selectedCard = FiendDeck[id]
    console.log(selectedCard)


    let attackPoints = selectedCard.attack_points
    let defensePoints = selectedCard.defense_points
    let monsterType = selectedCard.monster_type
    let attribute = selectedCard.attribute
    let level = selectedCard.level



    console.log(attackPoints)

  return (
    <>
    <Link to="/fienddeck"><h4 class="white">Back</h4></Link>

    <div className="single-card-snippet">
        <h3 class="white">{selectedCard.name}</h3>
        <img style={{height: 420}} src={selectedCard.image} />
        <div className="card-info">
        {selectedCard.card_type==="monster" && 
          <>
            <div className="monster-card-info">
            <div class="attribute">Attack Points:<b class="blue">{attackPoints}</b></div>
            <div class="attribute">Type: <b class="blue">{monsterType.join( "/ ")}</b></div>
            <div class="attribute">Defense Points:<b class="blue">{defensePoints}</b></div>

            <div class="attribute">Attribute: <b class="blue">{attribute}</b></div>
            <div class="attribute">Level:<b class="blue">{level}</b></div>

            </div>
          </>
            }     
        </div>
    </div>
    </>
  )
}

