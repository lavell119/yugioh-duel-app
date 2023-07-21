import React from 'react'
import FiendDeck from './components/fiend_deck.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import SingleCardSnippet from './components/SingleCardSnippet'

let int = 2

export default function FiendCard() {
    console.log(FiendDeck)
    const { id } = useParams()
    let selectedCard = FiendDeck[id]
    console.log(selectedCard)



  return (
    <>
    <Link to="/fienddeck"><h4 class="white">Back</h4></Link>

    <SingleCardSnippet card={selectedCard} />
    </>
  )
}

