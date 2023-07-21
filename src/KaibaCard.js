import React from 'react'
import KaibaDeck from './components/kaiba_deck.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import SingleCardSnippet from './components/SingleCardSnippet'

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

    <SingleCardSnippet card={selectedCard} />
    </>
  )
}

